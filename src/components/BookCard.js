import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h4>{book.volumeInfo.title}</h4>
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/128x200"
        }
        alt={book.volumeInfo.title}
      />
      <p>
        Author:{" "}
        {book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Unknown"}
      </p>
      <button
        onClick={() => window.open(book.volumeInfo.previewLink, "_blank")}
      >
        Preview
      </button>
    </div>
  );
};

export default BookCard;
