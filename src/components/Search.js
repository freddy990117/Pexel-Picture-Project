import React from "react";
const Search = ({ searchURL }) => {
  return (
    <div className="search">
      <input type="text" />
      <button onClick={searchURL}>Search</button>
    </div>
  );
};

export default Search;
