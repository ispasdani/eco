import React, { useState, useEffect } from "react";
import styles from "@/components/imageAutoSlider/styles.module.scss";
import { motion } from "framer-motion";

type ImageAutoSliderProps = {
  images: Array<string>;
};

function ImageAutoSlider({ images }: ImageAutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.imageAutoSlider}>
      {images.map((imageUrl, index) => (
        <motion.img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            position: "absolute",
            height: "100%", // Adjust this based on your design
            width: "100%", // Adjust this based on your design
          }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}

export default ImageAutoSlider;
