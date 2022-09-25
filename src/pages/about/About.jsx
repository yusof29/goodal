import React from "react";

import goodal from "../../assets/goodal.mp4";
import way from "../../assets/way.jpg";
import nature from "../../assets/nature.jpg";
import beauty from "../../assets/beauty.jpg";

const About = () => {
  return (
    <main className="bg-bgcolor2 w-full min-h-screen">
      <div className="container mx-auto py-6 px-6 lg:px-16 md:pb-32 space-y-16 md:space-y-32">
        {/* header */}
        <div className="flex flex-col items-center mt-20 space-y-8">
          <h1 className="text-primary font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl">
            Good for ALL
          </h1>
          <p className="text-secondary font-gotu text-lg md:text-2xl lg:text-3xl flex flex-col space-y-6 text-center w-4/5">
            <span>Goodal stands for "good + all".</span>
            <span>
              We believe in making good skincare products that are good for all.
              Good skincare should be simple, not complicated or overwhelming.
            </span>

            <span>
              Goodal harvested plants that grew in diverse enviromental change
              in season. With modern technology, we carefully filtering out
              impurities by slowly boiling raw materials and extracting only
              fresh active ingredients.
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          <video
            className="md:w-4/5 rounded-xl shadow-2xl "
            src={goodal}
            autoPlay
            loop
            muted
          />
        </div>

        {/* grid container */}
        <div className="grid gap-8 md:gap-24 md:grid-cols-2 p-6">
          {/* way 1 */}
          <div className="self-center space-y-4">
            <h2 className="text-primary font-urbanist font-bold text-2xl md:text-3xl lg:text-4xl">
              Way of LIFE
            </h2>
            <p className="text-secondary font-gotu text-base md:text-lg lg:text-xl">
              We believe skincare is more than just a routine. Since the
              Inception of goodal, we've been committed to researching and
              redefining 'good care' for all skin types. It's a way of life. We
              believe a simple act of self-care has the power to transform one's
              overall well-being.
            </p>
          </div>

          <img
            className="h-64 md:h-96 w-full object-cover rounded-lg overflow-hidden shadow-2xl"
            src={way}
            alt="/"
          />

          {/* way 2 */}
          <div className="self-center space-y-4 md:col-start-2 md:row-start-2">
            <h2 className="text-primary font-urbanist font-bold text-2xl md:text-3xl lg:text-4xl">
              Inspired by Nature
            </h2>
            <p className="text-secondary font-gotu text-base md:text-lg lg:text-xl">
              Inspired by mother nature and driven by innovative technology,
              we're committed to formulating our products with pristine,
              natural, and clean ingredients. All of our products are free of
              parabens, sulfates, phthalates, and other toxic ingredients.
            </p>
          </div>

          <img
            className="h-64 md:h-96 w-full object-cover rounded-lg overflow-hidden shadow-2xl"
            src={nature}
            alt="/"
          />

          {/* way 3 */}
          <div className="self-center space-y-4">
            <h2 className="text-primary font-urbanist font-bold text-2xl md:text-3xl lg:text-4xl">
              Beauty by Restoration
            </h2>
            <p className="text-secondary font-gotu text-base md:text-lg lg:text-xl">
              We are here to inspire good care for your skin and help you find
              the best skincare for you. We are driven by a simple yet profound
              mission. To restore the healthy balance to your skin.
            </p>
          </div>

          <img
            className="h-64 md:h-96 w-full object-cover rounded-lg overflow-hidden shadow-2xl"
            src={beauty}
            alt="/"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
