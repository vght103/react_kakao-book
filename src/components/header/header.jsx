import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ search }) => {
  const history = useHistory();
  const inputRef = useRef();

  const goToLogin = () => {
    history.push("/login");
  };

  const goToHome = () => {
    history.push("/");
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      searchResult();
    }
  };

  const searchClick = () => {
    searchResult();
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
          onClick={goToLogin}
        />
        {/* <span className={styles.login} onClick={goToLogin}>
          카카오톡 로그인
        </span> */}
        {/* <span className={styles.logout}>로그아웃</span> */}
      </div>
    </header>
  );
};

export default Header;
