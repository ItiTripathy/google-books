import React from "react";
import styles from "./Home.module.scss";
import { useState } from "react";

const Home = ({ onSubmit, setSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        onSubmit(inputValue);
    };

    return (
        <>
            <header className={styles.Header}>
                <h1>Google Books UI</h1>
                <p>Please enter the book name below to find more information</p>
                <div className={styles.SearchBar}>
                    <label htmlFor="searchInput"></label>
                    <input
                        type="text"
                        className={styles.SearchBar__Input}
                        id="searchInput"
                        onChange={handleChange}
                        value={inputValue}
                    ></input>
                    <button
                        className={styles.SearchBar__Btn}
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </div>
            </header>
        </>
    );
};

export default Home;
