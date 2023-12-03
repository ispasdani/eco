import React from "react";
import styles from "@/sections/LandingSection/styles.module.scss";
import Image from "next/image";
import { landingTexts } from "@/constants/landingTexts";

function LandingSection() {
  return (
    <div className={styles.landingSection}>
      <div className={styles.landingLeft}>
        <div className={styles.leftTextBox}>
          <p>{landingTexts.EN.landingLeftText1}</p>
          <p>{landingTexts.EN.landingLeftText2}</p>
          <p>{landingTexts.EN.landingLeftText3}</p>
          <p>{landingTexts.EN.landingLeftText4}</p>
          <p>{landingTexts.EN.landingLeftText5}</p>
          <p>{landingTexts.EN.landingLeftText6}</p>
          <p>{landingTexts.EN.landingLeftText7}</p>
          <p>{landingTexts.EN.landingLeftText8}</p>
          <p>{landingTexts.EN.landingLeftText9}</p>
        </div>
        <Image
          src="/icons/arrowDecor.svg"
          alt="Arrow Decor"
          width={50}
          height={50}
          className={styles.leftArrow}
        />
      </div>
      <div className={styles.landingRight}>
        <h1 className={styles.landingTextsMain}>
          {landingTexts.EN.landingTitle1.toUpperCase()}
        </h1>
        <div className={styles.landingTextWrapper}>
          <p className={styles.landingTexts}>{landingTexts.EN.landingTitle2}</p>
          <p className={styles.landingSecondaryText}>
            {landingTexts.EN.landingTitle4}
          </p>
          <p className={styles.landingTexts}>{landingTexts.EN.landingTitle3}</p>
        </div>
        <img
          src="/images/landingImg.jpg"
          alt="Landing Nature Image"
          className={styles.landingImg}
        />
      </div>
    </div>
  );
}

export default LandingSection;
