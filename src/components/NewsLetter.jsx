import React from "react";

import { FiArrowRight } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <section className="bg-bgcolor3 w-full md:min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-6 lg:px-16">
        <div className="space-y-6 flex flex-col items-center">
          <div className="space-y-6 text-center">
            <h2 className="text-primary font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl">
              Subscribe to our newsletter
            </h2>
            <p className="text-secondary font-gotu text-lg md:text-2xl lg:text-3xl">
              Receive updates, exclusive deals, and more!
            </p>
          </div>

          <div className="bg-bgcolor w-80 md:w-96 rounded-lg flex items-center overflow-hidden pr-6 space-x-6 shadow-2xl hover:bg-gray-300 transition ease-in duration-300">
            <input
              className="py-4 px-6 w-full focus:outline-none text-lg"
              type="text"
              placeholder="Your Email"
            />
            <FiArrowRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
