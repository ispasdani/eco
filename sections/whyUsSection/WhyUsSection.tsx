import React from "react";
import styles from "@/sections/whyUsSection/styles.module.scss";
import { whyUsTexts } from "@/constants/whyUsTexts";
import FullCard from "@/components/fullCard/FullCard";

function WhyUsSection() {
  return (
    <div className={styles.whyUsSection}>
      <div className={styles.whyFirstEntry}>
        <div className={styles.whyLeft}>
          <p>{whyUsTexts.EN.whyUsLeftText}</p>
        </div>
        <div className={styles.whyRight}>
          <h2>{whyUsTexts.EN.whyusFirstTitle}</h2>
          <h2>{whyUsTexts.EN.whyusSecondTitle}</h2>

          <div className={styles.experienceSection}></div>
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div className={styles.whySecondEntry}>
        <div className={styles.whyLeft}>
          <p>Experience</p>
        </div>
        <div className={styles.whyRight}>
          <div className={styles.whyRightLeft}>
            <p>19+</p>
            <p>years</p>
          </div>
          <div className={styles.whyRightRight}>
            <p>{whyUsTexts.EN.whyusLeftText1}</p>
            <p>{whyUsTexts.EN.whyusLeftText2}</p>
            <p>{whyUsTexts.EN.whyusLeftText3}</p>
            <p>{whyUsTexts.EN.whyusLeftText4}</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div className={styles.whyThirdEntry}>
        <div className={styles.whyLeft}>
          <p>Equipment</p>
          <p>Team</p>
        </div>
        <div className={styles.whyRight}>
          <FullCard
            cardText="Our recycling lines consist of a number of different pieces of
          equipment, each fulfilling a specific function."
            cardTitle="We benefit from using professional equipment"
            videoSrc="/videos/equipmentVideo.mp4"
          />
          <FullCard
            cardText="Managing waste recycling is our responsibility, for all of us who inhabit this ecosystem. Our team manages this process to make it a part of everyday normalcy."
            cardTitle="We benefit from a professional team"
            videoSrc="/videos/storyVideo.mp4"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
