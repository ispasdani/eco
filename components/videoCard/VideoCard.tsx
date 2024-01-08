import React from "react";
import styles from "@/components/videoCard/styles.module.scss";

type VideoCardProps = {
  src: string;
  width?: string;
  videoTextBubble?: string;
};

const VideoCard = ({ src, width, videoTextBubble }: VideoCardProps) => {
  return (
    <div className={styles.videoCardWrapper} style={{ width: width }}>
      <video loop autoPlay muted className={styles.videoPlayer}>
        <source src={`${src}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCard;
