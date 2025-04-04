import React, { useEffect, useState } from 'react';
import styles from './My_Footer.module.css';

const Footer = () => {
  const [diamondSponsors, setDiamondSponsors] = useState([]);

  useEffect(() => {
    fetch('/api/data/sponsors')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(sponsor => sponsor.type?.toLowerCase() === 'gyémánt' || sponsor.type?.toLowerCase() === 'gyémánt');
        setDiamondSponsors(filtered);
      })
      .catch(err => console.error('Error fetching sponsors:', err));
  }, []);

  return (
    <footer className={styles.foot}>
      <div className={styles.footer_neon_line}></div>

      <div className={styles.footer_sponsor_container}>
        {diamondSponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsor.path}
              alt="Sponsor"
              loading="lazy"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </a>
        ))}
      </div>

      <p><span>&#169; BME Motorsport</span> 2024 | Minden jog fenntartva </p>
    </footer>
  );
};

export default Footer;
