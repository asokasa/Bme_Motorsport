import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const uploadPaths = {
    sponsors: path.join(__dirname, "src/assets/sponsors"),
    teamMembers: path.join(__dirname, "src/assets/teamMembers"),
    alumni: path.join(__dirname, "src/assets/alumni"),
    blogPosts: path.join(__dirname, "src/assets/blogPosts")
};

const jsonPaths = {
    sponsors: path.join(__dirname, "src/assets/sponsors.json"),
    teamMembers: path.join(__dirname, "src/assets/teamMembers.json"),
    alumni: path.join(__dirname, "src/assets/alumni.json"),
    blogPosts: path.join(__dirname, "src/assets/blogPosts.json")
};

// Ensure directories & JSON files exist
Object.values(uploadPaths).forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

Object.values(jsonPaths).forEach(jsonFile => {
    if (!fs.existsSync(jsonFile)) fs.writeFileSync(jsonFile, JSON.stringify([]));
});

// Multer file upload setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!uploadPaths[req.body.category]) {
            return cb(new Error("Invalid category"), null);
        }
        cb(null, uploadPaths[req.body.category]);
    },
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// 📌 GET: Fetch all data by category
app.get("/data/:category", (req, res) => {
    const { category } = req.params;
    if (!jsonPaths[category]) return res.status(400).json({ error: "Invalid category" });

    const data = JSON.parse(fs.readFileSync(jsonPaths[category], "utf-8"));
    res.json(data);
});

// 📌 POST: Upload new entry (store only necessary fields)
app.post("/upload", upload.fields([{ name: "image" }, { name: "textFile" }]), (req, res) => {
    console.log("Upload request received:", req.body);

    const { category, link, name, description, type, title, date } = req.body;
    if (!jsonPaths[category]) return res.status(400).json({ error: "Invalid category" });

    let newEntry = { id: Date.now() };

    // Store only relevant fields based on category
    if (req.files.image) {
        newEntry.path = path.join("src/assets", category, req.files.image[0].filename);
    }
    if (req.files.textFile) {
        newEntry.textFile = path.join("src/assets", category, req.files.textFile[0].filename);
    }


    if (category === "sponsors") {
        newEntry.link = link;
        newEntry.type = type;
    } else if (category === "teamMembers") {
        newEntry.name = name;
        newEntry.description = description;
        newEntry.type = type;
    } else if (category === "alumni") {
        newEntry.name = name;
    } else if (category === "blogPosts") {
        newEntry.title = title;
        newEntry.date = date;
    }

    const existingData = JSON.parse(fs.readFileSync(jsonPaths[category], "utf-8"));
    existingData.push(newEntry);
    fs.writeFileSync(jsonPaths[category], JSON.stringify(existingData, null, 2));

    res.json({ success: true, message: "File uploaded successfully", data: newEntry });
});

// 📌 PUT: Edit an existing entry
app.put("/edit/:category/:id", (req, res) => {
    const { category, id } = req.params;
    const updatedEntry = req.body;

    if (!jsonPaths[category]) return res.status(400).json({ error: "Invalid category" });

    let data = JSON.parse(fs.readFileSync(jsonPaths[category], "utf-8"));
    data = data.map(entry => entry.id == id ? { ...entry, ...updatedEntry } : entry);
    fs.writeFileSync(jsonPaths[category], JSON.stringify(data, null, 2));

    res.json({ success: true, message: "Entry updated successfully", data: updatedEntry });
});

// 📌 DELETE: Remove an entry
app.delete("/delete/:category/:id", (req, res) => {
    const { category, id } = req.params;

    if (!jsonPaths[category]) {
        return res.status(400).json({ error: "Invalid category" });
    }

    let data = JSON.parse(fs.readFileSync(jsonPaths[category], "utf-8"));
    const entryToDelete = data.find(entry => entry.id == id);
    const newData = data.filter(entry => entry.id != id);

    if (!entryToDelete) {
        return res.status(404).json({ error: "Entry not found" });
    }

    // 🔹 Get absolute file paths
    const imagePath = entryToDelete.path ? path.join(__dirname, entryToDelete.path.replace("src/", "")) : null;
    const textFilePath = entryToDelete.textFile ? path.join(__dirname, entryToDelete.textFile.replace("src/", "")) : null;

    // 🔹 Debugging logs
    console.log("\n--- Deletion Debug Info ---");
    console.log("Category:", category);
    console.log("ID:", id);
    console.log("Image Path:", imagePath);
    console.log("Text File Path:", textFilePath);
    console.log("---------------------------\n");

    // 🔹 Check if file exists before deleting
    if (imagePath && fs.existsSync(imagePath)) {
        try {
            fs.unlinkSync(imagePath);
            console.log("✅ Successfully deleted image file:", imagePath);
        } catch (err) {
            console.error("❌ Error deleting image file:", err);
        }
    } else {
        console.warn("⚠️ Image file does not exist:", imagePath);
    }

    if (textFilePath && fs.existsSync(textFilePath)) {
        try {
            fs.unlinkSync(textFilePath);
            console.log("✅ Successfully deleted text file:", textFilePath);
        } catch (err) {
            console.error("❌ Error deleting text file:", err);
        }
    } else {
        console.warn("⚠️ Text file does not exist:", textFilePath);
    }

    // 🔹 Save the updated data
    fs.writeFileSync(jsonPaths[category], JSON.stringify(newData, null, 2));

    res.json({ success: true, message: "Entry and associated files deleted successfully" });
});

app.use("/src/assets", express.static(path.join(__dirname, "src/assets")));


// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
