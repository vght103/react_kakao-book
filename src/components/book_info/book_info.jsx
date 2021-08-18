import React from "react";
import styles from "./book_info.module.css";

const BookInfo = ({ book }) => {
  console.log(book);

  return (
    <>
      <div className={styles.book_info_wrap}>
        <div className={styles.book_info}>
          <img
            src={book.thumbnail}
            alt={book.title}
            className={styles.book_img}
          />
          <div className={styles.book_text}>
            <h2 className={styles.title}>{book.title}</h2>

            <dl className={styles.dl}>
              <dt>저자</dt>
              <dd>{book.authors}</dd>
            </dl>

            <dl className={styles.dl}>
              <dt>출판사</dt>
              <dd>{book.publisher}</dd>
            </dl>

            <dl className={styles.dl}>
              <dt>판매정보</dt>
              <dd>{book.status}</dd>
            </dl>

            <dl className={`${styles.dl} ${styles.price}`}>
              <dt>정상가</dt>
              <dd>{book.price}원</dd>
            </dl>

            <dl className={`${styles.dl} ${styles.sale_price}`}>
              <dt>판매가</dt>
              <dd>{book.sale_price}원</dd>
            </dl>

            <a href={book.url} target="_blank" className={styles.book_link}>
              구매하러 가기
            </a>
          </div>
        </div>
        <p className={styles.contents}>{book.contents}</p>
      </div>
    </>
  );
};

export default BookInfo;
