import React from "react";

import Button from "../../components/Button";

import { useLocation } from "react-router-dom";

const ProductItem = () => {
  const { state } = useLocation();
  const { prod } = state;

  return (
    <main className="bg-[#FFFFFF] w-full min-h-screen">
      <div className="container mx-auto py-6 px-6 lg:px-16 md:pb-32 space-y-16 md:space-y-32">
        <div className="mt-20 space-y-12">
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="group h-52 md:h-64 relative flex justify-center">
              <img
                className="h-52 md:h-64 max-w-xs absolute object-cover group-hover:opacity-0 transition ease-in-out duration-500"
                src={prod.image}
                alt={prod.name}
              />

              <img
                className="h-52 md:h-64 max-w-xs absolute object-cover opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 rounded-lg shadow-xl"
                src={prod.image2}
                alt={prod.name}
              />
            </div>

            <div className="space-y-8 flex flex-col text-center justify-center">
              <div className="space-y-4">
                <p className="text-primary font-urbanist font-bold text-3xl md:text-4xl lg:text-5xl">
                  {prod.name}
                </p>
                <span className="text-secondary font-gotu text-lg md:text-2xl lg:text-3xl inline-block">
                  {prod.price}
                </span>
              </div>

              <div className="space-y-4 space-y-reverse md:space-y-0 md:space-x-4 flex flex-col-reverse items-center md:flex-row justify-center">
                <Button
                  navigateTo="/products"
                  btnStyle="btn-primary"
                  text="Back"
                />
                <Button
                  navigateTo="/cart"
                  btnStyle="btn-secondary"
                  text="Add to cart"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-primary font-urbanist font-bold border-b pb-2 text-xl md:text-2xl lg:text-3xl">
              Description
            </h2>

            <div className="space-y-3 pl-6">
              {prod.description.map((desc, index) => {
                return (
                  <p
                    key={index}
                    className="text-secondary font-urbanist text-small md:text-base lg:text-lg"
                  >
                    <span className="font-semibold mr-1">{desc.span}</span>
                    {desc.p}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductItem;
