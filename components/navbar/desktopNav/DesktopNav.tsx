'use client'

import React, { useEffect, useState } from "react";
import styles from "@/components/navbar/desktopNav/styles.module.scss";
import NavLogo from "@/components/navLogo/NavLogo";
import Link from "next/link";
import { navTexts } from "@/constants/navTexts";

const DesktopNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`${isScrolling ? styles.dekstopNavScroll : styles.dekstopNav}`}>
      <div className={styles.navLeftSide}>
        <NavLogo />
      </div>

      <div className={styles.deskNavLinksContainer}>
        <Link href="currentPage#whyUs" className={`${styles.navLink} ${styles.example2}`}>
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
