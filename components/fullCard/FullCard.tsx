import React from "react";
import styles from "@/components/fullCard/styles.module.scss";

type FullCardProps = {
  cardTitle: string;
  cardText: string;
  videoSrc: string;
};

const FullCard = ({ cardTitle, cardText, videoSrc }: FullCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.videoCard}>
        <video loop autoPlay muted className={styles.video}>
          <source src={`${videoSrc}`} type="video/mp4" />
        </video>
      </div>
      <div className={styles.cardText}>
        <h4>{cardTitle}</h4>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default FullCard;
