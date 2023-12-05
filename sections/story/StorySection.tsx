import React from "react";
import styles from "@/sections/story/styles.module.scss";

function StorySection() {
  return (
    <div className={styles.storySection}>
      <div className={styles.storyBanner}></div>
      <div className={styles.storyContent}>
        <div className={styles.storyContentLeft}>
          <p>02.</p>
        </div>
        <div className={styles.storyContentRight}>
          <div className={styles.storyContentRightTop}>
            <h2>Our story.</h2>
          </div>
          <div className={styles.storyContentRightBottom}>
            <p>
              We are a company established in 2004 that provides stable
              solutions for environmental protection. Collecting and recycling
              waste is our main goal in order to step towards a cleaner and
              healthier planet
            </p>
            <p>
              We like to believe that we are more than just an environmental
              services company. We are a dedicated team of eco-warriors on a
              mission to collect, recover, and protect our precious planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
