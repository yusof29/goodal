import React from "react";

const ProductBanner = (props) => {
  return (
    <>
      {props.banner.map((item) => {
        return (
          <div
            key={item.id}
            className={
              item.category === "apple" || item.category === "leaf"
                ? "mt-8 relative flex justify-center items-center"
                : "mt-8 relative flex justify-end items-center"
            }
          >
            <h1
              className={
                item.category === "apple" || item.category === "leaf"
                  ? "text-primary font-urbanist font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl absolute uppercase"
                  : "text-primary font-urbanist font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl absolute uppercase mr-3 sm:mr-5 md:mr-6 lg:mr-20"
              }
            >
              {item.name}
            </h1>

            <img
              className="rounded-xl shadow-xl"
              src={item.image}
              alt="banner"
            />
          </div>
        );
      })}
    </>
  );
};

export default ProductBanner;
