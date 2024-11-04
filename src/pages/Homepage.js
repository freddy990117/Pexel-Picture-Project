import React, { useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
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
    <div style={{ minHeight: "100vh" }}>
      <Search searchURL={searchURL} />
      <Picture />
    </div>
  );
};

export default Homepage;
