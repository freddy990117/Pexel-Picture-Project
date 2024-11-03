import React, { useState } from "react";
import axios from "axios";
const Search = () => {
  const APIKey = "lL1HhRkMbVFuuRw16a0djqE25Rp09n4Mp1ySItXcFVyiSSZMZ5SpOviJ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const [showPicture, Picture] = useState();

  const searchURL = async () => {
    const result = await axios.get(initialURL, {
      headers: { Authorization: APIKey },
      // photographer alt src.large
    });
    Picture(result.data.photos);
    console.log(result.data);
  };
  return (
    <div className="search">
      <input type="text" />
      <button onClick={searchURL}>Search</button>
    </div>
  );
};

export default Search;
