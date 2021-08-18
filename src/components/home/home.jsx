import React from "react";
import styles from "./home.module.css";

const Home = ({ onLogin }) => {
  return (
    <div className={styles.home}>
      <h2>
        안녕하세요 <br />
        KAKAO BOOK 입니다.
      </h2>
      <h4>원하시는 책 정보를 검색해주세요.</h4>
      {/* <img
        src={process.env.PUBLIC_URL + "/imgs/kakao_login_large_narrow.png"}
        alt="카카오톡 로그인"
        className={styles.login}
        onClick={onLogin}
      /> */}
    </div>
  );
};

export default Home;
