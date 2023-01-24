import React from "react";

const Result = (props) => {
  const { onClick, name, distance, pick, closed } = props;
  console.log(name, distance, pick, closed);
  return (
    <div className="shops">
      <div className="shops__title">
        <div className="shops__title--name">{name}</div>
        <div className="shops__title--point">&#9679;</div>
        <div className="shops__title--distance"> {distance}</div>
      </div>
      <div className="shops__pickup">{pick}</div>
      <div className="shops__time">{closed}</div>
      {onClick && (
        <button
          className={`shops__add ${props.className}`}
          onClick={props.onClick}
        >
          Add to card
        </button>
      )}
    </div>
  );
};

export default Result;
