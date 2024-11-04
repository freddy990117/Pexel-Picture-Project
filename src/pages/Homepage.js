import React, { useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
  const APIKey = "lL1HhRkMbVFuuRw16a0djqE25Rp09n4Mp1ySItXcFVyiSSZMZ5SpOviJ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const [data, setData] = useState(null);
  const searchURL = async () => {
    const result = await axios.get(initialURL, {
      headers: { Authorization: APIKey },
      // photographer alt src.large
    });
    // Here is API's Data
    setData(result.data.photos);
    console.log(data);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search searchURL={searchURL} />
      <div className="pictures">
        {/* logical operator */}
        {data &&
          data.map((d, index) => {
            return <Picture data={d} index={index} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
