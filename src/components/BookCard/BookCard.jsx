import React from "react";
import { useState } from "react";
import styles from "./BookCard.module.scss";
import { bookProcessor } from "./../../scripts/bookProcessor";
import BookModal from "./../BookModal/BookModal";

const BookCard = ({ book }) => {
    const item = bookProcessor(book);

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <>
            <section className={styles.BookCard} onClick={showModal}>
                <img src={item["Thumbnail"]} alt="Book" />
                <h3>{item["Title"]}</h3>
                <h4>by {item["Authors"]}</h4>
            </section>
            <BookModal show={show} book={book} onClose={closeModal} />
        </>
    );
};

export default BookCard;
