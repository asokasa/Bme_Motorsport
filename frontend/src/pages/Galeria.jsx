import React, { useEffect, useState } from "react";
import styles from "./Galeria.module.css";

const Galeria = () => {
  const [events, setEvents] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetch("/api/data/galeria")
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  const handleImageLoad = (eventId, index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [`${eventId}-${index}`]: true,
    }));
  };

  return (
    <div className={styles.galeria}>
      <h2>Galéria</h2>

      {events.map((event) => (
        <div key={event.id} className={styles.eventBlock}>
          <h3>{event.title}</h3>
          <div className={styles.imageGrid}>
            {event.paths?.map((img, i) => (
              <a
              key={i}
              href={img}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img}
                alt={`event-${event.title}-${i}`}
                loading="lazy"
                className={`${styles.image} ${
                  loadedImages[`${event.id}-${i}`] ? styles.loaded : styles.loading
                }`}
                onLoad={() => handleImageLoad(event.id, i)}
                onError={(e) => (e.target.style.display = "none")}
              />
            </a>
            
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Galeria;
