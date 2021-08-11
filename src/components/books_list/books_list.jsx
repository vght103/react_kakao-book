import React from "react";
import BooksItem from "../books_item/books_item";
import styles from "./books_list.module.css";

const BooksList = ({ books }) => {
  return (
    <>
      <ul className={styles.books_list}>
        {books.map((book) => (
          <BooksItem key={book.isbn} book={book} />
        ))}
      </ul>
    </>
  );
};

export default BooksList;
