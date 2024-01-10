"use client";

import React, { useState } from "react";
import styles from "@/components/wasteCategories/styles.module.scss";
import { wasteCategories } from "@/constants/whatWeDoTexts";
import ImageCarousel from "../imageCarousel/ImageCarousel";

const plasticwaste = [
  "/images/pet.jpg",
  "/images/folie.jpg",
  "/images/ladite.jpg",
  "/images/tavite.jpg",
  "/images/plasticfarametal.jpg",
  "/images/copex.jpg",
];

const woodwaste = ["/images/wood.jpg"];

const papercardboardwaste = ["/images/carton.jpg", "/images/hartie.jpg"];

const textileandleatherwaste = ["/images/piele.jpg"];

const ferrousmetalwaste = ["/images/metalcferos.jpg"];

const nonferrousmetalwaste = [
  "/images/aluminiu.jpg",
  "/images/cupru.jpg",
  "/images/cabluricupru.jpg",
  "/images/cuprudoi.jpg",
];

const wasteelectricalandelectronicequipment = [
  "/images/electronics.jpg",
  "/images/deeeunu.jpg",
  "/images/deeedoi.jpg",
  "/images/deeetrei.jpg",
  "/images/deeepatru.jpg",
  "/images/deeecinci.jpg",
];

const glasswaste = ["/images/glass.jpg"];

const rubberwaste = ["/images/rubber.jpg"];
const usedbatteries = ["/images/.jpg"];
const hazardouswaste = ["/images/.jpg"];

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
      <div className={styles.wasteContainerBottom}>
        {selectedWaste.length > 0 && selectedWaste === "plasticwaste" && (
          <ImageCarousel images={plasticwaste} />
        )}
        {selectedWaste.length > 0 && selectedWaste === "woodwaste" && (
          <ImageCarousel images={woodwaste} />
        )}
        {selectedWaste.length > 0 &&
          selectedWaste === "papercardboardwaste" && (
            <ImageCarousel images={papercardboardwaste} />
          )}
        {selectedWaste.length > 0 &&
          selectedWaste === "textileandleatherwaste" && (
            <ImageCarousel images={textileandleatherwaste} />
          )}
        {selectedWaste.length > 0 && selectedWaste === "ferrousmetalwaste" && (
          <ImageCarousel images={ferrousmetalwaste} />
        )}
        {selectedWaste.length > 0 &&
          selectedWaste === "nonferrousmetalwaste" && (
            <ImageCarousel images={nonferrousmetalwaste} />
          )}
        {selectedWaste.length > 0 &&
          selectedWaste === "wasteelectricalandelectronicequipment" && (
            <ImageCarousel images={wasteelectricalandelectronicequipment} />
          )}
        {selectedWaste.length > 0 && selectedWaste === "glasswaste" && (
          <ImageCarousel images={glasswaste} />
        )}
        {selectedWaste.length > 0 && selectedWaste === "rubberwaste" && (
          <ImageCarousel images={rubberwaste} />
        )}
        {selectedWaste.length > 0 && selectedWaste === "usedbatteries" && (
          <ImageCarousel images={usedbatteries} />
        )}
        {selectedWaste.length > 0 && selectedWaste === "hazardouswaste" && (
          <ImageCarousel images={hazardouswaste} />
        )}
      </div>
    </section>
  );
};

export default WasteCategories;
