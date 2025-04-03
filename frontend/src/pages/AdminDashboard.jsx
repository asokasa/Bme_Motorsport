import styles from './AdminDashboard.module.css';
import { useState, useEffect, useMemo } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AdminDashboard = () => {
  const [category, setCategory] = useState("sponsors");
  const [data, setData] = useState([]);
  const [init, setInit] = useState(false);

  const [image, setImage] = useState(null);
  const [textFile, setTextFile] = useState(null);
  const [formData, setFormData] = useState({
    link: "", name: "", description: "", type: "", title: "", date: ""
  });

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
        setFormData({ link: "", name: "", description: "", type: "", title: "", date: "" });
        setImage(null);
        setTextFile(null);
      } else {
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

      {/* Upload Forms - Only one visible at a time */}
      {category === "sponsors" && (
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
          <input type="text" name="link" placeholder="Sponsor Link" onChange={handleChange} required />
          <select name="type" onChange={handleChange} required>
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
          <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} required />
          <select name="type" onChange={handleChange} required>
            <option value="vezetők">Vezetők</option>
            <option value="motorvezérlés csoport">Motorvezérlés csoport</option>
            <option value="mechanika csoport">Mechanika csoport</option>
            <option value="kompozit csoport">Kompozit csoport</option>
            <option value="hybrid csoport">Hybrid csoport</option>
            <option value="elektronika csoport">Elektronika csoport</option>
            <option value="marketing csoport">Marketing csoport</option>
            <option value="pénzügy">Pénzügy</option>
          </select>
          <button type="submit">Csapattag hozzáadása</button>
        </form>
      )}

      {category === "alumni" && (
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <button type="submit">Alumni hozzáadása</button>
        </form>
      )}

      {category === "blogPosts" && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Blog Title" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />
          <label htmlFor="">.webP</label>
          <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
          <label htmlFor="">.txt</label>
          <input type="file" name="textFile" accept=".txt" onChange={handleFileChange} required />
          <button type="submit">Blog Post hozzáadása</button>
        </form>
      )}


{category === "galeria" && (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      placeholder="Esemény címe"
      onChange={handleChange}
      required
    />
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={(e) => setImage(e.target.files)}
      multiple
      required
    />
    <button type="submit">Képek feltöltése</button>
  </form>
)}

      {/* Display Section - Independent Selector */}
      <h3>Existing {category}:</h3>
      <ul>
        {data.map(entry => (
          <li key={entry.id}>
            {entry.path && <img src={`/${entry.path}`} alt={entry.name || "No Image"} width="80" />}
            <strong>{entry.name || entry.title}</strong>
            <button onClick={() => handleDelete(entry.id, entry.path)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
    </div>
  );
};

export default AdminDashboard;
