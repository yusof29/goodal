import React, { useEffect } from "react";

import Button from "../../components/Button";
import { slider } from "../../assets/herobanner/slider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrImg } from "../../features/slider/sliderSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const { currImg } = useSelector((store) => store.slider);

  const slideRight = () => {
    currImg < slider.length - 1
      ? dispatch(setCurrImg({ currImg: currImg + 1 }))
      : dispatch(setCurrImg({ currImg: 0 }));
  };

  const slideLeft = () => {
    currImg > 0
      ? dispatch(setCurrImg({ currImg: currImg - 1 }))
      : dispatch(setCurrImg({ currImg: slider.length - 1 }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      slideRight();
    }, 2500);

    return () => clearTimeout(timer);
  });

  return (
    <main
      className="bg-bgcolor2 w-full min-h-screen"
      // style={{ backgroundColor: `${slider[currImg].color}` }}
    >
      <div className="container mx-auto py-6 px-6 lg:px-16">
        {/* grid container */}
        <div className="grid gap-32 place-items-center lg:grid-cols-2 mt-20 lg:mt-52">
          {/* 1 div */}
          <div className="space-y-6 lg:space-y-14 text-center lg:text-left w-full">
            <h1 className="text-primary font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl">
              Good all, goodal
            </h1>

            <div className="lg:hidden">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Link to={`/products`}>
                  <img src={slider[currImg].img2} alt="brand" />
                </Link>
              </div>

              <div className="mt-8 flex justify-center space-x-6">
                <div
                  onClick={() =>
                    currImg > 0
                      ? dispatch(setCurrImg({ currImg: currImg - 1 }))
                      : dispatch(setCurrImg({ currImg: slider.length - 1 }))
                  }
                >
                  <AiOutlineArrowLeft className="w-7 h-7 bg-zinc-900/40 rounded-full p-1 text-white/80 hover:scale-105 hover:bg-zinc-900/60 transition ease-in duration-300 cursor-pointer" />
                </div>

                <div className="space-x-3 flex items-center">
                  {slider.map((slide) => (
                    <GoPrimitiveDot
                      key={slide.id}
                      className={
                        slide.id === currImg
                          ? "text-primary/70 hover:scale-125 transition ease-in duration-300 cursor-pointer"
                          : "text-secondary/40 hover:scale-125 transition ease-in duration-300 cursor-pointer"
                      }
                      onClick={() =>
                        dispatch(setCurrImg({ currImg: slide.id }))
                      }
                      size={25}
                    />
                  ))}
                </div>

                <div
                  onClick={() =>
                    currImg < slider.length - 1
                      ? dispatch(setCurrImg({ currImg: currImg + 1 }))
                      : dispatch(setCurrImg({ currImg: 0 }))
                  }
                >
                  <AiOutlineArrowRight className="w-7 h-7 bg-zinc-900/40 rounded-full p-1 text-white/80 hover:scale-105 hover:bg-zinc-900/60 transition ease-in duration-300 cursor-pointer" />
                </div>
              </div>
            </div>

            <p className="text-secondary font-gotu text-lg md:text-2xl lg:text-3xl">
              Living a life where nature and people coexist. Goodal provides
              simple solutions using unique and natural ingredients from nature.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col items-center md:flex-row md:justify-center lg:justify-start">
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
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Link to={`/products`}>
                <img
                  className="w-full h-full object-cover object-center"
                  src={slider[currImg].img2}
                  alt="brand"
                />
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <div onClick={slideLeft}>
                <AiOutlineArrowLeft className="w-7 h-7 bg-zinc-900/40 rounded-full p-1 text-white/80 hover:scale-105 hover:bg-zinc-900/60 transition ease-in duration-300 cursor-pointer" />
              </div>

              <div className="space-x-3 flex items-center">
                {slider.map((slide) => (
                  <GoPrimitiveDot
                    key={slide.id}
                    className={
                      slide.id === currImg
                        ? "text-primary/70 hover:scale-125 transition ease-in duration-300 cursor-pointer"
                        : "text-secondary/40 hover:scale-125 transition ease-in duration-300 cursor-pointer"
                    }
                    onClick={() => dispatch(setCurrImg({ currImg: slide.id }))}
                    size={25}
                  />
                ))}
              </div>

              <div onClick={slideRight}>
                <AiOutlineArrowRight className="w-7 h-7 bg-zinc-900/40 rounded-full p-1 text-white/80 hover:scale-105 hover:bg-zinc-900/60 transition ease-in duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
