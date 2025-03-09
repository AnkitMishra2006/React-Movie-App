import React from "react";

const Search = ({ searchTerm, setSearchTerm, className }) => {
  return (
    <div className={`search ${className}`}>
      ``
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
