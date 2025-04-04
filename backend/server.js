import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import path from "path";
import { fileURLToPath } from "url";

// === Setup ===
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());

// === MongoDB Connection ===
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// === Cloudinary Setup ===
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "bme_motorsport_uploads",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// === Models ===
import TeamMember from "./models/TeamMember.js";
import Sponsor from "./models/Sponsor.js";
import Alumni from "./models/Alumni.js";
import BlogPost from "./models/BlogPost.js";
import GalleryEvent from "./models/GalleryEvent.js";

// === Upload Route ===
app.post("/api/upload", upload.fields([{ name: "image" }, { name: "textFile" }]), async (req, res) => {
  const { category, link, name, description, type, title, date } = req.body;

  try {
    const imageFile = req.files.image?.[0];
    const imageUrl = imageFile?.path || "";
    const publicId = imageFile?.filename?.split(".")[0] || "";

    if (category === "teamMembers") {
      const saved = await TeamMember.create({ name, description, type, path: imageUrl, publicId });
      return res.json({ success: true, data: saved });
    } else if (category === "sponsors") {
      const saved = await Sponsor.create({ link, type, path: imageUrl, publicId });
      return res.json({ success: true, data: saved });
    } else if (category === "alumni") {
      const saved = await Alumni.create({ name, path: imageUrl, publicId });
      return res.json({ success: true, data: saved });
    } else if (category === "blogPosts") {
      const textFileUrl = req.files.textFile?.[0]?.path || "";
      const saved = await BlogPost.create({ title, date, path: imageUrl, textFile: textFileUrl, publicId });
      return res.json({ success: true, data: saved });
    } else if (category === "galeria") {
      const imageUrls = req.files.image?.map(f => f.path) || [];
      const publicIds = req.files.image?.map(f => f.filename?.split(".")[0]) || [];
      const saved = await GalleryEvent.create({ title, paths: imageUrls, publicIds });
      return res.json({ success: true, data: saved });
    }

    res.status(400).json({ success: false, error: "Unsupported category" });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// === Get Data Route ===
app.get("/api/data/:category", async (req, res) => {
  const { category } = req.params;
  try {
    if (category === "teamMembers") return res.json(await TeamMember.find());
    if (category === "sponsors") return res.json(await Sponsor.find());
    if (category === "alumni") return res.json(await Alumni.find());
    if (category === "blogPosts") return res.json(await BlogPost.find());
    if (category === "galeria") return res.json(await GalleryEvent.find());

    res.status(400).json({ error: "Invalid category" });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// === Delete Route ===
app.delete("/api/delete/:category/:id", async (req, res) => {
  const { category, id } = req.params;

  try {
    let entry;

    if (category === "teamMembers") entry = await TeamMember.findById(id);
    else if (category === "sponsors") entry = await Sponsor.findById(id);
    else if (category === "alumni") entry = await Alumni.findById(id);
    else if (category === "blogPosts") entry = await BlogPost.findById(id);
    else if (category === "galeria") entry = await GalleryEvent.findById(id);
    else return res.status(400).json({ error: "Invalid category" });

    if (!entry) return res.status(404).json({ error: "Entry not found" });

    if (entry.publicId) {
      await cloudinary.uploader.destroy(entry.publicId);
    }

    if (entry.publicIds) {
      for (const pid of entry.publicIds) {
        await cloudinary.uploader.destroy(pid);
      }
    }

    await entry.deleteOne();
    res.json({ success: true });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// === Serve Frontend ===
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// === File Size Error Handler ===
app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({ error: "File too large. Max 5MB allowed." });
  }
  next(err);
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
