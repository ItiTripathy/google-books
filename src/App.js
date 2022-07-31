import { useState, useEffect } from "react";
import Home from "./containers/Home/Home";
import BookList from "./containers/BookList";
import styles from "./App.module.scss";

const App = () => {
    const [booksData, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const fetchBooks = async (query) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`
        );

        const data = await response.json();
        console.log(data);
       
    };

    useEffect(() => {
        fetchBooks(search);
    }, [search]);

    const handleSubmit = (newSearch) => {
        setSearch(newSearch);
    };

    return (
        <div className={styles.App}>
            <Home onSubmit={handleSubmit} setSearch={setSearch} />
            <BookList books={booksData} />
        </div>
    );
};

export default App;
