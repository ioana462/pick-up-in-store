import React, { useState } from "react";
import Product from "../product";
import Result from "../result";
import Search from "../search";

export const Maincard = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([
    {
      name: "Fana",
      distance: "7.1 km away",
      pick: "Pick up in 3 days",
      closed: "Closed, opens tomorrow at 10:00",
    },
    {
      name: "Lagoon",
      distance: "83.6 km away",
      pick: "Pick up in 4 days",
      closed: "Closed, opens tomorrow at 10:00",
    },
  ]);
  const addData = () => {
    if (name !== "") {
      setData([
        ...data,
        {
          name: name,
          distance: "83.6 km away",
          pick: "Pick up in 5 days",
          closed: "Closed, opens tomorrow at 10:00",
        },
      ]);
      setName("");
    }
  };

  return (
    <div className="home">
      <Product />
      <div className="newshop">
        <Search setName={setName} name={name} />
        {name && (
          <Result
            onClick={addData}
            name={name}
            distance="83.6 km away"
            pick="Pick up in 5 days"
            closed="Closed, opens tomorrow at 10:00"
          />
        )}
      </div>
      <div className="options">
        <div className="options__list">Get the items faster</div>
        {data.map((shops) => {
          console.log(shops);
          return (
            <Result
              name={shops.name}
              distance={shops.distance}
              pick={shops.pick}
              closed={shops.closed}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Maincard;
