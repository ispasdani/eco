import React from "react";
import styles from "@/components/paragraph/styles.module.scss";

type ParagraphProps = {
  text: string;
};

const Paragraph = ({ text }: ParagraphProps) => {
  return <p className={styles.paragraph}>{text}</p>;
};

export default Paragraph;
