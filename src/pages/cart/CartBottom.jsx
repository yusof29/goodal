import React from "react";
import { useSelector } from "react-redux";

const CartBottom = () => {
  const { cartTotalAmount } = useSelector((store) => store.cart);

  return (
    <div className="p-4 font-urbanist space-y-2 bg-bgcolor border-t-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-primary">SUBTOTAL</h1>
        <span className="bg-primary text-white rounded text-sm md:text-base py-1 px-2">
          ${cartTotalAmount}
        </span>
      </div>

      <div className="grid items-center justify-items-center gap-2">
        <p className="text-center text-sm font-medium md:text-lg">
          Taxes and Shipping Will Calculate At Shipping
        </p>
        <button className="bg-primary text-white text-sm md:text-base py-1 px-2 rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartBottom;
