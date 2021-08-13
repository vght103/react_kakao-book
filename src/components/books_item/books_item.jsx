import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./books_item.module.css";

const BooksItem = ({ book, clickBook }) => {
  const history = useHistory();

  console.log(clickBook);

  const goToBookInfo = () => {
    history.push("/book-info");
    clickBook(book);
    console.log(clickBook);
  };

  return (
    <li className={styles.book_list} onClick={goToBookInfo}>
      <div className={styles.book_item}>
        <img
          src={book.thumbnail}
          alt={book.thumbnail}
          className={styles.book_img}
        />

        <div className={styles.book_info}>
          <h3 className={styles.title}> {book.title}</h3>
          <div>
            <div className={styles.price}>
              <span>정상가</span>
              <span> {book.price} 원</span>
            </div>

            <div className={styles.sale_price}>
              <span>판매가</span>
              <span> {book.sale_price} 원</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BooksItem;
