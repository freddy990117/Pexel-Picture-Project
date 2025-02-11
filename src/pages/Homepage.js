import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
  // States
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  // My API Key
  const APIKey = "lL1HhRkMbVFuuRw16a0djqE25Rp09n4Mp1ySItXcFVyiSSZMZ5SpOviJ";
  // 設定初始的 URL
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  // 設定搜尋的 URL
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  // 設定非同步函式，並會接受一個 url 參數
  const search = async (url) => {
    // 透過 axios 取得資料
    const result = await axios.get(url, {
      headers: { Authorization: APIKey },
    });
    // Here is API's Data
    setData(result.data.photos);
  };
  // Show Picture immediately （目前的 url 參數是 initialURL）
  useEffect(() => {
    search(initialURL);
  }, [input]);
  //
  // More Picture Button，還沒做出來
  const morePicture = () => {};
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          // search url 參數是 searchlURL，並透過 props 傳遞給 Search
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
      {/* <div className="morePicture">
        <button onClick={morePicture()}>More</button>
      </div> */}
    </div>
  );
};

export default Homepage;
