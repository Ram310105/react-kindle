import React from "react";

const Sidebar = ({ fetchBooks }) => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Library</a>
        </li>
      </ul>

      <div className="dropdown">
        <button className="genre-dropdown-btn">
          Genres <i className="fas fa-chevron-down"></i>
        </button>
        <div className="dropdown-content">
          {[
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
          ].map((genre) => (
            <button
              className="genre-btn"
              key={genre}
              onClick={() => fetchBooks(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
