import React, { useEffect, useState } from "react";

const Deliver = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive(!isActive);
  };
  return (
    <div className="deliver">
      <button
        className={`${isActive ? "select" : ""} deliver__shipping`}
        onClick={handleClick}
      >
        Deliver the item
      </button>
      <button
        className={`${isActive ? "" : "select"} deliver__shipping`}
        onClick={handleClick}
      >
        Pick up in store
      </button>
    </div>
  );
};

export default Deliver;
