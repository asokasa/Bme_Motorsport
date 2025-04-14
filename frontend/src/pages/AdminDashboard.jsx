import styles from './AdminDashboard.module.css';
import { useState, useEffect, useMemo } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useRef } from "react";




const AdminDashboard = () => {
  const [category, setCategory] = useState("sponsors");
  const [data, setData] = useState([]);
  const [init, setInit] = useState(false);

  const [image, setImage] = useState(null);
  const [textFile, setTextFile] = useState(null);
  const [formData, setFormData] = useState({
    link: "", name: "", description: "", type: "", title: "", date: ""
  });
  const imageInputRef = useRef();
const textFileInputRef = useRef();


  useEffect(() => {
    fetch(`/api/data/${category}`)
      .then(res => res.json())
      .then(setData);
  }, [category]);

  const handleFileChange = (e) => {
    if (e.target.name === "image") setImage(e.target.files[0]);
    if (e.target.name === "textFile") setTextFile(e.target.files[0]);
  };

  const handleDelete = async (id, imagePath) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      const response = await fetch(`/api/delete/${category}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imagePath })
      });

      if (response.ok) {
        setData(prevData => prevData.filter(entry => entry.id !== id));
        alert("Entry deleted successfully!");
      } else {
        alert("Failed to delete entry.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("An error occurred while deleting.");
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category", category);
    if (image && category === "galeria") {
      for (let i = 0; i < image.length; i++) {
        data.append("image", image[i]);
      }
    } else if (image) {
      data.append("image", image);
    }
    if (textFile) data.append("textFile", textFile);
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data
      });
      const result = await response.json();
      if (result.success) {
        alert("Upload successful!");
        setFormData({
          link: "",
          name: "",
          description: "",
          title: "",
          date: "",
          type: ""
        });
        setImage(null);
        setTextFile(null);
        if (imageInputRef.current) imageInputRef.current.value = "";
        if (textFileInputRef.current) textFileInputRef.current.value = "";
      
        fetch(`/api/data/${category}`)
          .then(res => res.json())
          .then(setData);
      }
       else {
        alert("Upload failed: " + result.error);
      }
    } catch (error) {
      alert("Upload error occurred.");
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: { color: { value: "#000000" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#00aba2" },
        links: { color: "#00aba2", distance: 150, enable: true, opacity: 1, width: 2 },
        move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false },
        number: { density: { enable: true }, value: 180 },
        opacity: { value: 1 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (

    <div style={{ position: "relative", width: "100vw", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    <div className={styles.up_form}>
      <h2>Admin Dashboard</h2>

      {/* Upload Type Selector */}
      <label>Válassz kategóriát:</label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="sponsors">Sponsorok</option>
        <option value="teamMembers">Csapattagok</option>
        <option value="alumni">Alumni</option>
        <option value="blogPosts">Blog Postok</option>
        <option value="galeria">Galéria</option>

      </select>

      {category === "sponsors" && (
  <form onSubmit={handleSubmit}>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleFileChange}
      ref={imageInputRef}
      required
    />
    <input
      type="text"
      name="link"
      value={formData.link}
      placeholder="Sponsor Link"
      onChange={handleChange}
      required
    />
    <select
      name="type"
      value={formData.type}
      onChange={handleChange}
      required
    >
      <option value="">Válassz típust</option>
      <option value="gyémánt">Gyémánt</option>
      <option value="arany">Arany</option>
      <option value="ezüst">Ezüst</option>
      <option value="bronz">Bronz</option>
      <option value="további">További</option>
      <option value="egyetemi">Egyetemi</option>
    </select>
    <button type="submit">Sponsor hozzáadása</button>
  </form>
)}

{category === "teamMembers" && (
  <form onSubmit={handleSubmit}>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleFileChange}
      ref={imageInputRef}
      required
    />

    <input
      type="text"
      name="name"
      value={formData.name}
      placeholder="Name"
      onChange={handleChange}
      required
    />

    <textarea
      name="description"
      value={formData.description}
      placeholder="Description"
      onChange={handleChange}
      required
    />

    <select
      name="type"
      value={formData.type}
      onChange={handleChange}
      required
    >
      <option value="">Válassz csoportot</option>
      <option value="Vezetőség">Vezetőség</option>
      <option value="Hajtáslánc csoport">Hajtáslánc csoport</option>
      <option value="Járműdinamika csoport">Járműdinamika csoport</option>
      <option value="kompozit csoport">Kompozit csoport</option>
      <option value="hybrid csoport">Hybrid csoport</option>
      <option value="elektronika csoport">Elektronika csoport</option>
      <option value="Marketing és Szponzoráció csoport">Marketing és Szponzoráció csoport</option>
      <option value="pénzügy">Pénzügy</option>
    </select>

    <button type="submit">Csapattag hozzáadása</button>
  </form>
)}


{category === "alumni" && (
  <form onSubmit={handleSubmit}>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleFileChange}
      ref={imageInputRef}
      required
    />
    <input
      type="text"
      name="name"
      value={formData.name}
      placeholder="Name"
      onChange={handleChange}
      required
    />
    <button type="submit">Alumni hozzáadása</button>
  </form>
)}


{category === "blogPosts" && (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      value={formData.title}
      placeholder="Blog Title"
      onChange={handleChange}
      required
    />
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      required
    />
    <label>.webP</label>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleFileChange}
      ref={imageInputRef}
      required
    />
    <label>.txt</label>
    <input
      type="file"
      name="textFile"
      accept=".txt"
      onChange={handleFileChange}
      ref={textFileInputRef}
      required
    />
    <button type="submit">Blog Post hozzáadása</button>
  </form>
)}


{category === "galeria" && (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      value={formData.title}
      placeholder="Esemény címe"
      onChange={handleChange}
      required
    />
    <input
      type="file"
      name="image"
      accept="image/*"
      multiple
      ref={imageInputRef}
      onChange={(e) => {
        const files = Array.from(e.target.files);
        const tooBig = files.find(f => f.size > 5 * 1024 * 1024);
        if (tooBig) {
          alert("Each image must be under 5MB.");
          e.target.value = null;
          return;
        }
        setImage(e.target.files);
      }}
      required
    />
    <button type="submit">Képek feltöltése</button>
  </form>
)}

<h3>Existing {category}:</h3>
<table className={styles.dataTable}>
  <thead>
    <tr>
      {data[0] && Object.keys(data[0]).map((key, i) => (
        <th key={i}>{key}</th>
      ))}
      <th>Preview</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((entry) => (
      <tr key={entry._id}>
        {Object.keys(entry).map((key, i) => (
          <td key={i}>
            {typeof entry[key] === 'string' && entry[key].startsWith('https://res.cloudinary.com')
              ? <a href={entry[key]} target="_blank" rel="noopener noreferrer">link</a>
              : Array.isArray(entry[key])
              ? `${entry[key].length} image(s)`
              : entry[key]}
          </td>
        ))}
        <td>
          {entry.path && (
            <img
              src={entry.path}
              alt={entry.name || entry.title}
              width="80"
              loading="lazy"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          {entry.paths && entry.paths[0] && (
            <img
              src={entry.paths[0]}
              alt={entry.title}
              width="80"
              loading="lazy"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
        </td>
        <td>
          <button onClick={() => handleDelete(entry._id, entry.path)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </div>
  );
};

export default AdminDashboard;
