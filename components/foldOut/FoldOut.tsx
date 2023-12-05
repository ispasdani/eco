"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styles from "@/components/foldOut/styles.module.scss";

type FoldOutProps = {
  index?: number;
  width?: string;
  height?: string;
  borderTop?: string;
  borderBottom?: string;
  foldOutTitle?: string;
  arrElements?: [];
};

const FoldOut = ({
  foldOutTitle,
  width,
  height,
  borderBottom,
  borderTop,
  index,
}: FoldOutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ opacity: 1 });
  };

  const handleHoverEnd = () => {
    controls.start({ opacity: 0 });
  };

  return (
    <motion.div className={styles.foldOut}>
      <AnimatePresence>
        <motion.div
          key="question"
          className={styles.foldOutHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          What we collect
          <motion.img
            src="/icons/expandArrow.svg"
            alt="Expanding row icon"
            className={styles.expandArrow}
            initial={{ rotate: 0 }}
            animate={{
              rotate: isOpen ? 180 : 0,
              transition: {
                duration: 0.6,
              },
            }}
          ></motion.img>
        </motion.div>

        {isOpen && (
          <motion.div
            className={styles.foldOutContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "300px",
              transition: {
                duration: 0.6,
              },
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div
              className={styles.contentElement}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              Test
              <motion.img
                src="/icons/imgIcon.svg"
                className={styles.contentElementImg}
              />
              <motion.img
                src="/images/landingImg.jpg"
                className={styles.imageReveal}
                animate={controls}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FoldOut;
