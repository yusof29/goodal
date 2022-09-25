import React from "react";
import Card from "../../components/Card";

const Collection = () => {
  return (
    <section className="bg-bgcolor w-full min-h-screen">
      <div className="container mx-auto py-6 px-6 lg:px-16 md:py-32 space-y-14">
        {/* name div */}
        <div className="space-y-6 text-center">
          <h2 className="text-primary font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl">
            Goodal Collection
          </h2>
          <p className="text-secondary font-gotu text-lg md:text-2xl lg:text-3xl">
            Highly effective, simply natural.
          </p>
        </div>

        {/* products div */}
        <Card />
      </div>
    </section>
  );
};

export default Collection;
