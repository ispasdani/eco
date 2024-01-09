"use client";

import React, { useState } from "react";
import styles from "@/components/wasteCategories/styles.module.scss";
import { wasteCategories } from "@/constants/whatWeDoTexts";

const WasteCategories = () => {
  const [selectedWaste, setSelectedWaste] = useState("");
  console.log(selectedWaste);

  return (
    <section className={styles.wasteCategoriesContainer}>
      <div className={styles.wasteContainerTop}>
        {wasteCategories.EN.map((cat, index) => (
          <div
            key={index * 9321}
            className={styles.wasteCategoryBtn}
            onClick={(e) => {
              const target = e.target as HTMLElement;
              const transformedText = target.innerText
                .replace(/[-\s]/g, "")
                .toLocaleLowerCase();
              setSelectedWaste(transformedText);
            }}
          >
            {cat}
          </div>
        ))}
      </div>
      <div className={styles.wasteContainerBottom}></div>
    </section>
  );
};

export default WasteCategories;
