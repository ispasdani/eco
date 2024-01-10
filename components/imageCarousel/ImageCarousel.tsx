"use client";

import React, { useState } from "react";
import styles from "@/components/imageCarousel/styles.module.scss";
import Image from "next/image";

const ImageCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <Image
        key={currentIndex}
        src={images[currentIndex]}
        className={styles.carouselImage}
        width={400}
        height={300}
        alt="image shown based on waste category selected"
      />
      <div className={styles.slideDirection}>
        <div className={styles.leftArrow} onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="64"
            viewBox="0 -960 960 960"
            width="64"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <div className={styles.rightArrow} onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="64"
            viewBox="0 -960 960 960"
            width="64"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
      <div className="indicator">
        {images.map((_: any, index: React.Key | null | undefined) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
