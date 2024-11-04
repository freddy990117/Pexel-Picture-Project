import React from "react";

const Picture = ({ data, index }) => {
  return (
    <div className="picture">
      <p>photographer is : {data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt={index} />
      </div>
      <p>
        Download Here :
        <a target="_blank " href={data.src.large}>
          Click Me
        </a>
      </p>
    </div>
  );
};

export default Picture;
