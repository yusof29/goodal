import React, { useState } from "react";

import { Link } from "react-router-dom";

import { bannerData } from "../../assets/product/bannerData";
import { productDataTest } from "../../assets/product/productDataTest";

import all_banner from "../../assets/product/all_banner.jpg";
import ProductBanner from "./ProductBanner";

const Products = () => {
  const [product, setProduct] = useState(productDataTest);
  const [banner, setBanner] = useState(bannerData);

  const [showBanner, setshowBanner] = useState(true);

  //  filter type (implicit way)
  const filterType = (category) => {
    setProduct(
      productDataTest.filter((item) => {
        return item.category === category;
      })
    );
    setBanner(
      bannerData.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <main className="bg-[#FFFFFF] w-full min-h-screen">
      <div className="container mx-auto p-6 px-6 lg:px-16 md:pb-32 space-y-8 md:space-y-32">
        {/* header div */}

        {showBanner ? (
          <div className="mt-8 relative flex justify-end items-center">
            <h1 className="text-primary font-urbanist font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl absolute uppercase mr-3 sm:mr-5 md:mr-6 lg:mr-20">
              All Product
            </h1>

            <img
              className="rounded-xl shadow-xl"
              src={all_banner}
              alt="banner"
            />
          </div>
        ) : (
          <ProductBanner banner={banner} />
        )}

        {/* grid div */}
        <div className="grid md:grid-cols-4 space-y-5 md:space-y-0">
          {/* side */}
          <div className="md:space-y-5 text-center md:text-left">
            <h2 className="text-primary font-urbanist font-bold text-2xl md:text-3xl lg:text-4xl">
              Products
            </h2>

            <ul className="text-secondary font-urbanist text-base md:text-lg lg:text-xl px-3">
              <li
                onClick={() => {
                  filterType("all");
                  setProduct(productDataTest);
                  setshowBanner(false);
                }}
                className="py-3 px-5 rounded-lg hover:bg-[#535144] hover:text-bgcolor2 transition ease-in-out duration-300"
              >
                All
              </li>

              <li
                onClick={() => {
                  filterType("tangerine");
                  setshowBanner(false);
                }}
                className="py-3 px-5 rounded-lg hover:bg-[#F0E638] hover:text-bgcolor2 transition ease-in-out duration-300"
              >
                Green Tangerine
              </li>

              <li
                onClick={() => {
                  filterType("apple");
                  setshowBanner(false);
                }}
                className="py-3 px-5 rounded-lg hover:bg-[#E8545C] hover:text-bgcolor2 transition ease-in-out duration-300"
              >
                Apple Aha
              </li>

              <li
                onClick={() => {
                  filterType("leaf");
                  setshowBanner(false);
                }}
                className="py-3 px-5 rounded-lg hover:bg-[#C3AC1B] hover:text-[#FFFFFF] transition ease-in-out duration-300"
              >
                Heart Leaf
              </li>
            </ul>
          </div>

          {/* main */}
          <div className="md:col-span-3 space-y-3">
            {/* <div>
              {product.map((itemCount, index) => {
                // let count = 0;
                // for (
                //   var x = itemCount.allproduct.length;
                //   x <= itemCount.allproduct.length;
                //   x++
                // ) {
                //   count = count + itemCount.allproduct.length;
                // }

                return (
                  <div key={index}>
                    <h4 className="text-secondary font-urbanist text-base md:text-lg lg:text-xl">
                      {itemCount.allproduct.length} Products
                    </h4>
                  </div>
                );
              })}
            </div> */}

            {/* products grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-9 px-3">
              {product.map((item) =>
                item.allproduct.map((prod) => {
                  return (
                    <Link
                      to={`/products/${prod.id}`}
                      key={prod.id}
                      state={{ prod }}
                    >
                      <div className="text-center space-y-3">
                        <div className="group h-52 md:h-64 relative flex justify-center">
                          <img
                            className="h-52 md:h-64 absolute object-cover group-hover:opacity-0 transition ease-in-out duration-500"
                            src={prod.image}
                            alt={prod.name}
                          />

                          <img
                            className="h-52 md:h-64 absolute object-cover opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 rounded-lg shadow-xl"
                            src={prod.image2}
                            alt={prod.name}
                          />
                        </div>
                        <p className="text-secondary font-urbanist text-base md:text-lg lg:text-xl">
                          {prod.name}
                        </p>
                        <span className="text-secondary font-urbanist font-bold text-base md:text-lg lg:text-xl inline-block">
                          {prod.price}
                        </span>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
