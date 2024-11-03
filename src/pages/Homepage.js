import React from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search />
      <Picture />
    </div>
  );
};

export default Homepage;
