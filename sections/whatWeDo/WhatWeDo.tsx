import React from "react";
import styles from "@/sections/whatWeDo/styles.module.scss";
import FoldOut from "@/components/foldOut/FoldOut";

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
          <FoldOut />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
