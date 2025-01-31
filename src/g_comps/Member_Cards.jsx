import React from 'react';
import styles from './Member_Cards.module.css';

const Member_Cards = ({ fileName, title, description }) => {
  


  const imagePath = `/assets/Aktiv_Tagok/${fileName}`;

  return (
    <div className={styles.card}>
      <img src={imagePath} alt={title} className={styles.card_image} />
      <div className={styles.card_content}>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  );
};

export default Member_Cards;