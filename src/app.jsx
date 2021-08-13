import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import BooksList from "./components/books_list/books_list";
import BookInfo from "./components/book_info/book_info";
import Header from "./components/header/header";
import SignUp from "./components/sign_up/sign_up";

function App() {
  // 타이머를 만들어보자

  const [books, setBooks] = useState([]);

  const [clickedBook, setClickedBook] = useState(null);

  const clickBook = (book) => {
    setClickedBook(book);
  };

  const search = (query) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "KakaoAK f1ecec569093bda2f73f5de912bd4656"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://dapi.kakao.com/v3/search/book?query=${query}&page=3&size=20&key=f1ecec569093bda2f73f5de912bd4656`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setBooks(result.documents))
      // .then((result) => console.log(result.documents))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "KakaoAK f1ecec569093bda2f73f5de912bd4656"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://dapi.kakao.com/v3/search/book?query=여행&page=2&size=20&key=f1ecec569093bda2f73f5de912bd4656",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setBooks(result.documents))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header search={search} />
      <Switch>
        <Route exact path="/">
          <BooksList books={books} clickBook={clickBook} />
        </Route>

        <Route path="/login">
          <SignUp />
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
