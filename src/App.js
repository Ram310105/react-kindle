import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchSection from "./components/SearchSection";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";

function App() {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("");

  const fetchBooks = (query) => {
    const apiKey = "AIzaSyBs2mKjdK0obF7meIrXR_xrdLOIh-4M4zg";
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBooks(data.items || []))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const fetchRandomBooks = () => {
    const genres = [
      "fiction",
      "science",
      "history",
      "fantasy",
      "romance",
      "horror",
      "sports",
      "articles",
      "journals",
      "comedy",
      "comics",
      "space",
    ];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    setGenre(randomGenre);
    fetchBooks(randomGenre);
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar fetchBooks={fetchBooks} />
      <main id="main-content" className="main-content">
        <SearchSection fetchBooks={fetchBooks} />
        <section id="book-results" className="book-results">
          <h2
            id="genre-title"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            {genre}
          </h2>
          {books.length > 0 ? (
            books.map((book, index) => <BookCard key={index} book={book} />)
          ) : (
            <p>No books found.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
