import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>Login</li>
        <li className={styles.link}>Signin</li>
      </ul>
      <div className={styles.logo}>
        <img
          className={styles.logoImg}
          src="../../../images/logo.png"
          alt="logo"
        />
      </div>
      <div className={styles.category}>
        <ul className={styles.box}>
          <li className={styles.title}>Home</li>
          <li className={styles.title}>Art</li>
          <li className={styles.title}>Picture</li>
          <li className={styles.title}>Community</li>
          <li className={styles.title}>Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
