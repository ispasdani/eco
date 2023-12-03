import React from "react";
import styles from "@/components/navbar/desktopNav/styles.module.scss";
import NavLogo from "@/components/navLogo/NavLogo";
import Link from "next/link";
import { navTexts } from "@/constants/navTexts";

const DesktopNav = () => {
  return (
    <nav className={styles.dekstopNav}>
      <div className={styles.navLeftSide}>
        <NavLogo />
      </div>

      <div className={styles.deskNavLinksContainer}>
        <Link href="why us" className={`${styles.navLink} ${styles.example2}`}>
          {navTexts.EN.navLink1}
        </Link>
        <Link
          href="what we do"
          className={`${styles.navLink} ${styles.example2}`}
        >
          {navTexts.EN.navLink2}
        </Link>
        <Link
          href="our story"
          className={`${styles.navLink} ${styles.example2}`}
        >
          {navTexts.EN.navLink3}
        </Link>
        <Link
          href="our story"
          className={`${styles.navLink} ${styles.example2}`}
        >
          {navTexts.EN.navLink4}
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;
