import React from "react";
import styles from "@/sections/whatWeDo/styles.module.scss";
import FoldOut from "@/components/foldOut/FoldOut";
import { whatWeCollectArr, whatWeRecycleArr } from "@/constants/whatWeDoTexts";
import TwoItemsSection from "@/components/twoItemsSection/TwoItemsSection";
import Paragraph from "@/components/paragraph/Paragraph";

function WhatWeDo() {
  return (
    <div className={styles.whatWeDoSection}>
      <TwoItemsSection leftSideTitle="03." rightSideTitle="What we do.">
        <Paragraph text="In the recent period, we have invested in the activity of collecting and treating non-ferrous metallic waste, including high percentages of aluminum, copper, lead, nickel, zinc, as well as brass alloys or mixtures of metals with silver, gold, platinum, or rare metals." />
        <Paragraph text="The company has expertise in recycling all types of cables with aluminum or copper conductors, whether from aerial or underground installations, as well as cables from the automotive industry or electronic equipment. In this regard, we own a cable processing facility, from which result fractions of plastic masses, as well as copper or aluminum granules representing secondary raw materials." />
      </TwoItemsSection>
    </div>
  );
}

export default WhatWeDo;
