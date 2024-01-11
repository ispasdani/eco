"use client";

import React, { useState } from "react";
import styles from "@/components/navbar/mobileNav/styles.module.scss";
import NavLogo from "@/components/navLogo/NavLogo";
import Link from "next/link";
import { navTexts } from "@/constants/navTexts";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mobileNav}>
      <NavLogo />
      <div
        className={`${isOpen ? styles.hamburgerX : styles.hamburger}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isOpen && (
        <div className={styles.mobileNavContent}>
          <a href="/#whyUs" className={`${styles.navLink} ${styles.example2}`}>
            {navTexts.EN.navLink1}
          </a>
          <Link
            href="/#aboutUs"
            className={`${styles.navLink} ${styles.example2}`}
          >
            {navTexts.EN.navLink2}
          </Link>
          <Link
            href="/#whatWeDo"
            className={`${styles.navLink} ${styles.example2}`}
          >
            {navTexts.EN.navLink3}
          </Link>
          <Link
            href="/#contactUs"
            className={`${styles.navLink} ${styles.example2}`}
          >
            {navTexts.EN.navLink4}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
