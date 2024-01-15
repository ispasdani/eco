import React from "react";
import styles from "@/components/banner/styles.module.scss";

type BannerProps = {
  backgroundImageSrc: string;
};

const Banner = ({ backgroundImageSrc }: BannerProps) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    />
  );
};

export default Banner;
