import React from "react";
import styles from "./Header.module.css";
import logoSvg from "../../assets/logo.svg";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that Look's Different !
        </p>
        <p className={styles.heading}>
          Make one Now Champ! <span>It's Free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={logoSvg} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
