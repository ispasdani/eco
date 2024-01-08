"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styles from "@/components/foldOut/styles.module.scss";

type FoldOutProps = {
  index?: number;
  width?: string;
  height?: string;
  borderTop?: string;
  borderBottom?: string;
  foldOutTitle?: string;
  arrElements?: string[];
  collectText?: string;
};

const FoldOut = ({
  foldOutTitle,
  collectText,
  width,
  height,
  borderBottom,
  borderTop,
  index,
  arrElements,
}: FoldOutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredValue, setHoveredValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const cursorPositionRef = useRef({ x: 0, y: 0 });

  const handleMouseEnter = (text: string) => {
    setIsHovered(true);
    setHoveredValue(text);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event: any) => {
    cursorPositionRef.current = { x: event.clientX, y: event.clientY };
  };

  useEffect(() => {
    const handleMouseMoveDebounced = (event: any) => {
      if (isHovered) {
        cursorPositionRef.current = {
          x: event.clientX + 200,
          y: event.clientY,
        };
      }
    };

    document.addEventListener("mousemove", handleMouseMoveDebounced);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveDebounced);
    };
  }, [isHovered]);

  console.log(hoveredValue.toLowerCase());

  return (
    <motion.div className={styles.foldOut}>
      <AnimatePresence>
        <motion.div
          key="question"
          className={styles.foldOutHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{foldOutTitle}</p>
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
          />
        </motion.div>

        {isOpen && (
          <motion.div
            className={styles.foldOutContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.6,
              },
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {hoveredValue.length > 0 && isHovered && (
              <motion.img
                src={`/images/${hoveredValue.toLowerCase()}.jpg`}
                className={styles.imageReveal}
                style={{
                  position: "fixed",
                  top: cursorPositionRef.current.y - 50, // Adjust the distance from the cursor
                  left: cursorPositionRef.current.x,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
              />
            )}

            {arrElements?.map((text, index) => (
              <motion.div
                key={index * 196}
                className={styles.contentElement}
                style={{ position: isHovered ? "relative" : "unset" }}
                onMouseEnter={() => handleMouseEnter(text)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e)}
              >
                {text}
                <motion.img
                  src="/icons/imgIcon.svg"
                  className={styles.contentElementImg}
                />
              </motion.div>
            ))}

            {collectText && <motion.div>{collectText}</motion.div>}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FoldOut;
