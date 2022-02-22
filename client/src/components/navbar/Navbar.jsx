import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const history = useHistory();
  const goToMain = () => {
    history.push("/");
  };
  return (
    <section className={styles.container}>
      <ul className={styles.links}>
        <Link to="/login">
          <li className={styles.link}>Login</li>
        </Link>
        <Link to="/signup">
          <li className={styles.link}>Signup</li>
        </Link>
      </ul>
      <div className={styles.logo}>
        <img
          className={styles.logoImg}
          src="../../../images/logo.png"
          alt="logo"
          onClick={goToMain}
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
