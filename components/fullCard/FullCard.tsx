"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/components/fullCard/styles.module.scss";

type FullCardProps = {
  cardTitle: string;
  cardText: string;
  videoSrc: string;
};

const FullCard = ({ cardTitle, cardText, videoSrc }: FullCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, x: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={controls}
      className={styles.cardContainer}
    >
      <div className={styles.videoCard}>
        <video loop autoPlay muted className={styles.video}>
          <source src={`${videoSrc}`} type="video/mp4" />
        </video>
      </div>
      <div className={styles.cardText}>
        <h4>{cardTitle}</h4>
        <p>{cardText}</p>
      </div>
    </motion.div>
  );
};

export default FullCard;
