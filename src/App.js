import { useState, useEffect } from "react";
import Home from "./containers/Home/Home";
import BookList from "./containers/BookList";
import styles from "./App.module.scss";

const App = () => {
    const [booksData, setBooks] = useState([]);

    return (
        <div className={styles.App}>
            <Home />
        </div>
    );
};

export default App;
