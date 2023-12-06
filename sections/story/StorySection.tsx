import React from "react";
import styles from "@/sections/story/styles.module.scss";
import Countries from "@/components/countries/Countries";

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
      <div className={styles.activity}>
        <div className={styles.activityLeft}>
          <p>Where we operate</p>
        </div>
        <div className={styles.activityRight}>
          <h2>
            Global Reach, Local Impact: Discover ECOPLAST HART Across Romania,
            Hungary, and Moldova
          </h2>
          <p>
            With a global presence, we are proud to announce our current
            locations in Romania, Hungary, and Moldova. Committed to delivering
            excellence across borders, we strive to meet the diverse needs of
            our clients in these dynamic markets.
          </p>
          <p>
            As we continue to expand our footprint, we look forward to serving
            you with the same dedication and innovation that defines us on a
            global scale. Explore the world of possibilities with ECOPLAST HART
            - where international expertise meets local excellence.
          </p>
          <Countries />
        </div>
      </div>
    </div>
  );
}

export default StorySection;
