import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <div className={styles.header}>
    <img src="/imgs/logo.png" alt="logo" className={styles.logo_img} />
    <h1 className={styles.head_title}>Kakao Book</h1>

    <input type="text" className={styles.search_bar} />
    <button className={styles.search_btn}>검색</button>
  </div>
);

export default Header;
