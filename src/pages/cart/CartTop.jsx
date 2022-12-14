import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setClearCart } from "../../features/cart/cartSlice";

const CartTop = ({ handleCartNav }) => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(setClearCart());
  };

  return (
    <div className="p-4 flex items-center justify-between font-urbanist bg-bgcolor drop-shadow-lg">
      <div className="flex items-center gap-2">
        <button className="bg-primary p-1 rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out">
          <IoMdClose
            className="text-white md:w-5 md:h-5 "
            onClick={handleCartNav}
          />
        </button>
        <h1 className="font-bold text-primary">
          Your Cart ({cartTotalQuantity} Items)
        </h1>
      </div>

      <h1
        onClick={handleClearCart}
        className="cursor-pointer bg-primary text-white text-sm md:text-base py-1 px-2 rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out"
      >
        Clear Cart
      </h1>
    </div>
  );
};

export default CartTop;
