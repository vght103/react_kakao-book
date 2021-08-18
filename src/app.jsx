import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import BooksList from "./components/books_list/books_list";
import BookInfo from "./components/book_info/book_info";
import Header from "./components/header/header";
import Home from "./components/home/home";
// import KakaoLogin from "./components/kakao_login/kakao_login";

const { Kakao } = window;

function App({ kakaoService }) {
  const [books, setBooks] = useState([]);
  const [clickedBook, setClickedBook] = useState(null);

  // 카카오 로그인
  const KakaoLogin = () => {
    Kakao.Auth.login({
      success: function (response) {
        localStorage.setItem("kakao_token");
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    console.log("login");
  };

  Kakao.API.request({
    url: "/v2/user/me",
  });

  // 클릭한 책 정보
  const clickBook = (book) => {
    setClickedBook(book);
  };

  // 검색한 책 리스트
  const searchBook = (query) => {
    kakaoService
      .search(query) //
      .then((books) => setBooks(books));
  };

  useEffect(() => {
    const onScroll = (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      console.log("hey");
      if (scrollTop + clientHeight >= scrollHeight) {
        searchBook();
      }
    };
    document.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={searchBook} onLogin={KakaoLogin} />

      <Switch>
        <Route exact path="/react_kakao-book">
          <Home onLogin={KakaoLogin} />
        </Route>

        <Route path="/react_kakao/book-list">
          <BooksList books={books} clickBook={clickBook} />
        </Route>

        {/* <Route path="/react_kakao/login">
          <KakaoLogin />
        </Route> */}

        {clickedBook && (
          <Route path="/book-info">
            <BookInfo book={clickedBook} />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
