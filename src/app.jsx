import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import BooksList from "./components/books_list/books_list";
import BookInfo from "./components/book_info/book_info";
import Header from "./components/header/header";
import KakaoLogin from "./components/kakao_login/kakao_login";

function App({ kakaoService }) {
  // 타이머를 만들어보자

  const [books, setBooks] = useState([]);

  const [clickedBook, setClickedBook] = useState(null);

  const clickBook = (book) => {
    setClickedBook(book);
  };

  const search = (query) => {
    kakaoService
      .search(query) //
      .then((books) => setBooks(books));
  };

  const kakaoCode = () => {
    kakaoService.kakaoGetCode().then(console.log);
  };

  useEffect(() => {
    kakaoService
      .showBookList() //
      .then((books) => setBooks(books));
  }, []);

  return (
    <>
      <Header search={search} />
      <Switch>
        <Route exact path="/">
          <BooksList books={books} clickBook={clickBook} />
        </Route>

        <Route path="/login">
          <KakaoLogin kakaoCode={kakaoCode} />
        </Route>

        {clickedBook && (
          <Route path="/book-info">
            <BookInfo book={clickedBook} />
          </Route>
        )}
      </Switch>
    </>
  );
}

export default App;
