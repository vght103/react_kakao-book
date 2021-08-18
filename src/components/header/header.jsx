import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onSearch, onLogin }) => {
  const history = useHistory();
  const inputRef = useRef();

  const goToHome = () => {
    history.push("/react_kakao-book");
  };

  const goToBookList = () => {
    history.push("/react_kakao/book-list");
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      searchResult();
      goToBookList();
    }
  };

  const searchClick = () => {
    searchResult();
    goToBookList();
  };

  const searchResult = () => {
    const inputText = inputRef.current.value;
    if (!inputText) {
      return;
    }
    onSearch(inputText);
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
          className={styles.search_bar}
          onKeyPress={searchEnter}
        />
        <button className={styles.search_btn} onClick={searchClick}>
          검색
        </button>
      </div>

      <div className={styles.sign_area}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/kakao_login_small.png"}
          alt="카카오톡 로그인"
          className={styles.login}
          onClick={onLogin}
        />
      </div>
    </header>
  );
};

export default Header;
