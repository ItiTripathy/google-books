import React from "react";
import styles from "./BookCard.module.scss";
import { searchBookDetails } from "./../../scripts/searchBookDetails.js";

const BookCard = ({ book }) => {
    const details = searchBookDetails(book);
    return (
        <>
            <section className={styles.BookCard}>
                <img src={details["Thumbnail"]} />
                <h3>{details["Title"]}</h3>
                <h4>by {details["Authors"]}</h4>
            </section>
        </>
    );
};

export default BookCard;
