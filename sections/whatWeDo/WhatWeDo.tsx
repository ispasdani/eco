import React from "react";
import styles from "@/sections/whatWeDo/styles.module.scss";
import FoldOut from "@/components/foldOut/FoldOut";
import { whatWeCollectArr, whatWeRecycleArr } from "@/constants/whatWeDoTexts";

function WhatWeDo() {
  return (
    <div className={styles.whatWeDoSection}>
      <div className={styles.whatWeDoLeft}>
        <p>03.</p>
      </div>
      <div className={styles.whatWeDoRight}>
        <div className={styles.whatWeDoRightTop}>
          <h2>What we do.</h2>
        </div>
        <div className={styles.whatWeDoRightBottom}>
          <FoldOut
            arrElements={whatWeCollectArr}
            foldOutTitle="What we collect"
          />
          <FoldOut
            arrElements={whatWeRecycleArr}
            foldOutTitle="What we recycle"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
