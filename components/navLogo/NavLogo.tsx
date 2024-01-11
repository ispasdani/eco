import { navTexts } from "@/constants/navTexts";
import Image from "next/image";
import React from "react";
import styles from "@/components/navLogo/styles.module.scss";
import Link from "next/link";

const NavLogo = () => {
  return (
    <div className={styles.navLogoContainer}>
      <Link href="/" className={styles.navLogoLink}>
        <Image
          src="/icons/recycleLogo.svg"
          width={26}
          height={26}
          alt="Navigation Logo Company"
          className={styles.navLogo}
        />
        <p>{navTexts.EN.navTitle}</p>
      </Link>
    </div>
  );
};

export default NavLogo;
