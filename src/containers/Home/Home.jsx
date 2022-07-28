import React from "react";
import styles from "./Home.module.scss";
import { useState } from "react";

const Home = () => {
    return (
        <>
            <header className={styles.Header}>
                <h1>Google Books UI</h1>
                <p>Please enter the book name below to find more information</p>
                <div className={styles.SearchBar}>
                    <label htmlFor="searchInput"></label>
                    <input
                        className={styles.SearchBar__Input}
                        id="searchInput"
                        type="text"
                    ></input>
                    <button className={styles.SearchBar__Btn}>Search</button>
                </div>
            </header>
        </>
    );
};

export default Home;
