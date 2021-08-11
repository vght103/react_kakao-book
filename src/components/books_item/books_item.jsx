import React from "react";
import styles from "./books_item.module.css";

const BooksItem = ({ book }) => {
  // const bookList = book;

  // console.log(bookList.title);

  return (
    <li className={styles.book_list}>
      <div className={styles.book_item}>
        <img src={book.thumbnail} alt="" className={styles.book_img} />

        <div className={styles.book_info}>
          <h3 className={styles.title}>책 제목 : {book.title}</h3>
          <p className={styles.authors}>저자 : {book.authors}</p>
          <div>
            <p className={styles.price}>정상가 : {book.price} 원</p>
            <p className={styles.sale_price}>할인가 : {book.sale_price} 원</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BooksItem;
