import React from "react";
import styles from "./../BookList/BookList.module.scss";
import BookCard from "./../../components/BookCard";

const BookList = ({ books }) => {
    return (
        <>
            <section className={styles.BookList__Grid}>
                {books.map((book) => {
                    return <BookCard key={book?.id} book={book} />;
                })}
            </section>
        </>
    );
};

export default BookList;
