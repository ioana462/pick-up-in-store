import React from "react";
import Deliver from "../deliver";
import Stars from "../stars";

export const Product = () => {
  return (
    <div className="product">
      <div className="product__name">Ecovacs Deebot OZMO N8 + </div>
      <Stars number={4} />
      <div className="product__price">4395,-</div>
      <Deliver />
    </div>
  );
};
export default Product;
