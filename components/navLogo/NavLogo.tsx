import { navTexts } from "@/constants/navTexts";
import Image from "next/image";
import React from "react";
import styles from "@/components/navLogo/styles.module.scss";

const NavLogo = () => {
  return (
    <div className={styles.navLogoContainer}>
      <Image
        src="/icons/recycleLogo.svg"
        width={26}
        height={26}
        alt="Navigation Logo Company"
        className={styles.navLogo}
      />
      <p>{navTexts.EN.navTitle}</p>
    </div>
  );
};

export default NavLogo;
