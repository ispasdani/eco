import React from "react";
import styles from "@/components/Navbar/styles.module.scss";
import DesktopNav from "./desktopNav/DesktopNav";
import MobileNav from "./mobileNav/MobileNav";

const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;
