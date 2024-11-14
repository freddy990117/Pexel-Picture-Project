import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
  // States
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  const APIKey = "lL1HhRkMbVFuuRw16a0djqE25Rp09n4Mp1ySItXcFVyiSSZMZ5SpOviJ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const search = async (url) => {
    const result = await axios.get(url, {
      headers: { Authorization: APIKey },
    });
    // Here is API's Data
    setData(result.data.photos);
  };
  // Show Picture immediately
  useEffect(() => {
    search(initialURL);
  }, [input]);
  // More Picture Button
  const morePicture = () => {};
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {/* logical operator */}
        {data &&
          data.map((d, index) => {
            return <Picture data={d} index={index} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture()}>More</button>
      </div>
    </div>
  );
};

export default Homepage;
