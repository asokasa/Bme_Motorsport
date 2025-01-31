import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './My_carousel.module.css';

const My_carousel = () => {
  return (
    <Carousel className={styles.carouselContainer}>
      <Carousel.Item>
        <div className={styles.carouselItem}>
          <img
            className={`d-block ${styles.carouselImage}`}
            src="/assets/main_bg.jpg"
            alt="First slide"
          />
          <p className={styles.imageAlt}>First slide</p>
        </div>
        <Carousel.Caption className={styles.carouselCaption}>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={styles.carouselItem}>
          <img
            className={`d-block ${styles.carouselImage}`}
            src="/assets/main_bg.jpg"
            alt="Second slide"
          />
          <p className={styles.imageAlt}>Second slide</p>
        </div>
        <Carousel.Caption className={styles.carouselCaption}>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={styles.carouselItem}>
          <img
            className={`d-block ${styles.carouselImage}`}
            src="/assets/main_bg.jpg"
            alt="Third slide"
          />
          <p className={styles.imageAlt}>Third slide</p>
        </div>
        <Carousel.Caption className={styles.carouselCaption}>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default My_carousel;
