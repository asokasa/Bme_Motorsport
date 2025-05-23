import React, { useEffect, useState } from 'react';
import styles from './Hirek.module.css';

const Hirek = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch("/api/data/blogPosts")
            .then(response => response.json())
            .then(data => {
                // Sort by date (latest first)
                const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setBlogPosts(sortedPosts);
            })
            .catch(error => console.error("Error fetching blog posts:", error));
    }, []);

    return (
        <div className={styles.hirek_wrap}>
            <div className={styles.hirek_container}>
                {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                        <div key={post.id} className={styles.hirek_post}>
                            <h2>{post.title}</h2>
                            {post.textFile && (
                        <TextContent filePath={post.textFile} />
                        )}
                        {post.path && (
                        <img
                            src={post.path}
                            alt={post.title}
                            loading="lazy"
                            className={styles.hirek_image}
                            onError={(e) => (e.target.style.display = "none")}
                        />
                        )}

                        </div>
                    ))
                ) : (
                    <p className={styles.no_posts}>No blog posts available.</p>
                )}
            </div>
        </div>
    );
};

// Fetches and displays text content from a text file
const TextContent = ({ filePath }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => setText(data))
            .catch(error => console.error("Error fetching text file:", error));
    }, [filePath]);

    return <p className={styles.hirek_text}>{text}</p>;
};

export default Hirek;
