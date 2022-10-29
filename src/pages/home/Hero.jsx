import React from "react";

import brand from "../../assets/prod.png";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <main className="bg-bgcolor2 w-full min-h-screen">
      <div className="container mx-auto py-6 px-6 lg:px-16">
        {/* grid container */}
        <div className="grid place-items-center lg:grid-cols-2 mt-20 lg:mt-52">
          {/* 1 div */}
          <div className="space-y-6 lg:space-y-14 text-center lg:text-left w-full">
            <h1 className="text-primary font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl">
              Good all, goodal
            </h1>

            <div className="lg:hidden">
              <img src={brand} alt="brand" />
            </div>

            <p className="text-secondary font-gotu text-lg md:text-2xl lg:text-3xl">
              Living a life where nature and people coexist. Goodal provides
              simple solutions using unique and natural ingredients from nature.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col items-center md:flex-row justify-center">
              <Button
                navigateTo="/about"
                btnStyle="btn-primary"
                text="Brand Story"
              />
              <Button
                navigateTo="/products"
                btnStyle="btn-secondary"
                text="Shop Now"
              />
            </div>
          </div>

          {/* 2 div */}
          <div className="hidden lg:block">
            <img
              className="w-full h-full object-cover object-center"
              src={brand}
              alt="brand"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
