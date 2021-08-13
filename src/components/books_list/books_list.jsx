import React from "react";
import BooksItem from "../books_item/books_item";
import styles from "./books_list.module.css";

const BooksList = ({ books, clickBook }) => {
  return (
    <>
      <ul className={styles.books_list}>
        {books.map((book) => (
          <BooksItem key={book.isbn} book={book} clickBook={clickBook} />
        ))}
      </ul>
    </>
  );
};

export default BooksList;
