import React from "react";
import styles from "@/components/videoCard/styles.module.scss";

type VideoCardProps = {
  videoPath: string;
  width?: string;
  videoTextBubble?: string;
};

const VideoCard = ({ videoPath, width, videoTextBubble }: VideoCardProps) => {
  return (
    <div className={styles.videoCardWrapper}>
      <video loop autoPlay muted className={styles.videoPlayer}>
        <source src={`${videoPath}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCard;
