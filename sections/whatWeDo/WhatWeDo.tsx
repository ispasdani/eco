import React from "react";
import styles from "@/sections/whatWeDo/styles.module.scss";
import TwoItemsSection from "@/components/twoItemsSection/TwoItemsSection";
import Paragraph from "@/components/paragraph/Paragraph";
import ImageCarousel from "@/components/imageCarousel/ImageCarousel";
import WasteCategories from "@/components/wasteCategories/WasteCategories";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function WhatWeDo() {
  return (
    <div className={styles.whatWeDoSection}>
      <TwoItemsSection leftSideTitle="03." rightSideTitle="What we do.">
        <Paragraph text="In the recent period, we have invested in the activity of collecting and treating non-ferrous metallic waste, including high percentages of aluminum, copper, lead, nickel, zinc, as well as brass alloys or mixtures of metals with silver, gold, platinum, or rare metals." />
        <Paragraph text="The company has expertise in recycling all types of cables with aluminum or copper conductors, whether from aerial or underground installations, as well as cables from the automotive industry or electronic equipment. In this regard, we own a cable processing facility, from which result fractions of plastic masses, as well as copper or aluminum granules representing secondary raw materials." />
      </TwoItemsSection>
      <WasteCategories />
    </div>
  );
}

export default WhatWeDo;
