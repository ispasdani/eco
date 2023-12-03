"use client";

import React from "react";
import styles from "@/components/textOnScroll/styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { landingTexts } from "@/constants/landingTexts";

const TextOnScroll = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -1600]);

  return (
    <div className={styles.textOnScrollContainer}>
      <motion.p className={styles.motionText} style={{ x: x }}>
        {landingTexts.EN.heroPText1}
      </motion.p>
    </div>
  );
};

export default TextOnScroll;
