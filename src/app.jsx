import { useEffect, useState } from "react";
import "./app.css";
import BooksList from "./components/books_list/books_list";
import Header from "./components/header/header";

function App() {
  // 타이머를 만들어보자

  const [books, setBooks] = useState([]);

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
      "https://dapi.kakao.com/v3/search/book?query=javascript&page=2&key=f1ecec569093bda2f73f5de912bd4656",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setBooks(result.documents))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <BooksList books={books} />
    </>
  );
}

export default App;
