import React, { useState, useEffect, useLayoutEffect, useMemo } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
  // States
  const [data, setData] = useState([]);
  // 輸入的 State
  const [input, setInput] = useState("");
  // More Picture Button State
  const [morePage, setMorePage] = useState(1);
  // 設定「確定搜尋」的狀態
  const [currentSearch, setCurrentSearch] = useState("");
  // My API Key
  const APIKey = "My Secrect";
  // 設定初始的 URL
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=3";
  // 設定搜尋的 URL
  // let searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=3`;
  // 當 input 變更時執行，使用 useMemo 來提升效能
  const searchURL = useMemo(() => {
    return `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=3`;
  }, [input]);

  // 設定非同步函式，並會接受一個 url 參數
  const search = async (url) => {
    // 透過 axios 取得資料
    let result = await axios.get(url, {
      // 驗證身份
      headers: { Authorization: APIKey },
    });
    // Here is API's Data
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  // Show Picture immediately
  useEffect(() => {
    // 因為不需要更新 DOM，所以使用 useEffect
    search(initialURL); //（目前的 url 參數是 initialURL）
  }, []); // 未設定 dependencies，只在一開始執行

  // More Picture Button
  const morePicture = async () => {
    // Set a new URL
    let newURL;
    // 點選 More Picture 後跳出更多圖片
    setMorePage(morePage + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${
        morePage + 1
      }&per_page=3`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${
        morePage + 1
      }&per_page=3`;
    }

    // 將原本的 URL 替換成搜尋的 newURL
    let result = await axios.get(newURL, {
      headers: { Authorization: APIKey },
    });
    // 使用 concat 來合併 array
    setData(data.concat(result.data.photos));
  };

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
            return <Picture data={d} index={index} key={d.id} />;
          })}
      </div>
      {/* 建立更多圖片的按鈕 */}
      <div className="morePicture">
        <button onClick={morePicture}>More Picture</button>
      </div>
    </div>
  );
};

export default Homepage;
