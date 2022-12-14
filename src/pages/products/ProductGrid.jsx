import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../features/cart/cartSlice";

const ProductGrid = ({ id, name, type, price, image, image2, prod }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, name, type, price, image, image2 };

    dispatch(setAddItemToCart(item));
  };

  return (
    <div className="text-center space-y-3">
      <Link to={`/products/${id}`} state={{ prod }}>
        <div className="group h-52 md:h-64 relative flex justify-center">
          <img
            className="h-52 md:h-64 absolute object-cover group-hover:opacity-0 transition ease-in-out duration-500"
            src={image}
            alt={name}
          />

          <img
            className="h-52 md:h-64 absolute object-cover opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 rounded-lg shadow-xl"
            src={image2}
            alt={name}
          />
        </div>
      </Link>

      <p className="text-secondary font-urbanist text-base md:text-lg lg:text-xl">
        {name}
      </p>

      <div className="flex items-center justify-center gap-3">
        <span className="text-secondary font-urbanist font-bold text-base md:text-lg lg:text-xl inline-block">
          {price}
        </span>

        <HiOutlineShoppingBag
          onClick={handleAddToCart}
          className="bg-primary text-bgcolor h-6 w-6 p-1 cursor-pointer rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out"
        />
      </div>

      {/* <button className="btn-secondary w-36 py-2 px-2">
                          View Product
                        </button> */}
    </div>
  );
};

export default ProductGrid;
