import React, { useEffect, useState } from "react";

const Stars = (props) => {
  const [data, setdata] = useState([
    "fa-solid",
    "fa-solid",
    "fa-solid",
    "fa-solid",
    "fa-solid",
  ]);

  useEffect(() => {
    setdata(
      data.map((stars, index) => {
        return index < props.number ? "fa-solid" : "fa-regular";
      })
    );
  }, []);

  return (
    <div className="feedback">
      <div className="feedback__stars">
        {data.map((stars) => {
          return <i className={`${stars} fa-star`}></i>;
        })}
      </div>
      <p className="feedback__number">{props.number.toFixed(2)}</p>
      <div className="feedback__reviews">
        <div className="feedback__reviews--point">&#9679;</div>
        <div className="feedback__reviews--number">14 reviews</div>
      </div>
      <div className="feedback__profile"></div>
    </div>
  );
};

export default Stars;
