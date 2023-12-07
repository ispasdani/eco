import React from "react";
import styles from "@/components/footer/styles.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h2>ECOPLAST HART</h2>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bottomContact}>
          <h3>Contact us</h3>
          <h4>
            We offer seriousness, we offer services of the highest quality.
            Let's get to know each other!
          </h4>

          <div className={styles.contactWrapper}>
            <Image
              src="/icons/mail.svg"
              alt="E-mail icon"
              width={24}
              height={24}
            />
            <p>ecoplast_hart@yahoo.com</p>
          </div>
          <div className={styles.contactWrapper}>
            <Image
              src="/icons/location.svg"
              alt="E-mail icon"
              width={24}
              height={24}
            />
            <p>Sat Cristur, Strada Hunedoarei nr. 13, Jud. Hunedoara</p>
          </div>
          <div className={styles.contactWrapper}>
            <Image
              src="/icons/phone.svg"
              alt="E-mail icon"
              width={24}
              height={24}
            />
            <p>+40746152318</p>
          </div>
        </div>
        <div className={styles.bottomInfo}></div>
      </div>
    </footer>
  );
}

export default Footer;
