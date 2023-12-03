"use client";

import React, { useState } from "react";
import styles from "@/components/backgroundLines/styles.module.scss";
import { motion } from "framer-motion";

const Lines = () => {
  const [key, setKey] = useState(0);

  const restartAnimation = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className={styles.lines}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Lines;
