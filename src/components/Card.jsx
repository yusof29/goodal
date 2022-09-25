import React from "react";

import data from "../data";
import Button from "./Button";

const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {data.map((product, index) => {
        return (
          <div
            className="text-center space-y-5 flex flex-col items-center"
            key={index}
          >
            <h3 className="text-primary font-urbanist font-bold text-2xl md:text-3xl">
              {product.name}
            </h3>
            {/* <p className="flex-1 text-secondary font-gotu text-md md:text-2xl">
              {product.description}
            </p> */}

            <img
              className="w-full h-3/6 object-cover object-center rounded-xl shadow-xl transform hover:scale-105 transition ease-out duration-300 flex-1 "
              src={product.img}
              alt={product.name}
            />

            <Button
              navigateTo="/products"
              btnStyle="btn-card"
              text="View Collection"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
