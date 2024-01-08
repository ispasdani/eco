import React from "react";
import styles from "@/components/twoItemsSection/styles.module.scss";

type TwoItemsSectionProps = {
  leftSideTitle?: string;
  rightSideTitle?: string;
  rightSideSmallTitle?: string;
  leftSideSmallTitle?: string;
  margins?: string;
  height?: string;
  children?: React.ReactNode;
};

function TwoItemsSection({
  leftSideTitle,
  leftSideSmallTitle,
  margins,
  height,
  rightSideSmallTitle,
  rightSideTitle,
  children,
}: TwoItemsSectionProps) {
  return (
    <section className={styles.twoItemsSection}>
      <div className={styles.leftSide}>
        {leftSideTitle && (
          <p className={styles.leftSideTitle}>{leftSideTitle}</p>
        )}
        {leftSideSmallTitle && (
          <p className={styles.leftSideSmallTitle}>{leftSideSmallTitle}</p>
        )}
      </div>
      <div className={styles.rightSide}>
        {rightSideTitle && (
          <p className={styles.rightSideTitle}>{rightSideTitle}</p>
        )}
        {rightSideSmallTitle && (
          <p className={styles.rightSideSmallTitle}>{rightSideSmallTitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

export default TwoItemsSection;
