import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; // Ensure React Router is used
import styles from './My_carousel.module.css';

const My_carousel = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch("/api/data/blogPosts")
            .then(response => response.json())
            .then(data => {
                // Sort by date (latest first) and take the latest 3
                const latestPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
                setBlogPosts(latestPosts);
            })
            .catch(error => console.error("Error fetching blog posts:", error));
    }, []);

    return (
        <Carousel className={styles.carouselContainer}>
            {blogPosts.length > 0 ? (
                blogPosts.map(post => (
                    <Carousel.Item key={post.id}>
                        <div className={styles.carouselItem}>
                            <div className={styles.carouselText}>
                                <h2>{post.title}</h2>
                                <Link to="/hirek" className={styles.carouselLink}>
                                    Read More →
                                </Link>
                            </div>
                            <div className={styles.carouselImageContainer}>
  <img
    className={styles.carouselImage}
    src={post.path}
    alt={post.title}
    loading="lazy"
    onError={(e) => (e.target.style.display = "none")}
  />
</div>

                        </div>
                    </Carousel.Item>
                ))
            ) : (
                <Carousel.Item>
                    <p className={styles.noPosts}>No recent blog posts available.</p>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default My_carousel;
