import React, { useState } from "react";

const SearchSection = ({ fetchBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      fetchBooks(searchTerm);
    }
  };

  return (
    <section className="search-section">
      <input
        type="text"
        id="search-input"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="search-button" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default SearchSection;
