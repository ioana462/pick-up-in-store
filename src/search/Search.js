import React, { useState } from "react";

const Search = (props) => {
  const { setName, name } = props;

  const handleNameChange = (evt) => {
    const newValue = evt.target.value;
    setName(newValue);
    console.log(evt);
  };

  const handleKey = (evt) => {
    if (evt.keyCode === 13) {
      evt.target.value = "";
    }
    console.log(evt);
  };
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass search__loop"></i>
      <input
        className="search__bar"
        placeholder="1254"
        onChange={(evt) => handleNameChange(evt)}
        onKeyUp={(evt) => handleKey(evt)}
        value={name}
      ></input>
    </div>
  );
};

export default Search;
