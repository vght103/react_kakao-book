import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ search, onLogin }) => {
  const history = useHistory();
  const inputRef = useRef();

  const goToHome = () => {
    history.push("/");
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      searchResult();
    }
    goToHome();
  };

  const searchClick = () => {
    searchResult();
    goToHome();
  };

  const searchResult = () => {
    const inputText = inputRef.current.value;
    search(inputText);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={goToHome}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/logo.png"}
          className={styles.logo_img}
          alt="logo"
        />
        <h1 className={styles.head_title}>Kakao Book</h1>
      </div>

      <div className={styles.search}>
        <input
          ref={inputRef}
          type="text"
          className={styles.search_bar}
          onKeyPress={searchEnter}
        />
        <button className={styles.search_btn} onClick={searchClick}>
          검색
        </button>
      </div>

      <div className={styles.sign_area}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/kakao_login.png"}
          alt="카카오톡 로그인"
          className={styles.login}
          onClick={onLogin}
        />
      </div>
    </header>
  );
};

export default Header;
