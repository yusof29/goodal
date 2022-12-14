import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetTotals } from "../../features/cart/cartSlice";
import { CartTop, CartEmpty, CartFilled, CartBottom } from "./index";

const Cart = ({ handleCartNav }) => {
  const dispatch = useDispatch();
  const { cartState, cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      {/* overlay */}
      {cartState ? (
        <div className="bg-black/70 w-full h-screen z-10 fixed top-0 left-0"></div>
      ) : null}

      {/* cart menu */}
      <div
        className={`bg-[#FFFFFF] w-[300px] md:w-[500px] duration-300 h-screen z-10 fixed top-0 flex flex-col justify-between
          ${cartState ? "right-0 " : "right-[-100%]"}`}
      >
        {/* top */}
        <CartTop handleCartNav={handleCartNav} />

        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <div className="overflow-y-scroll scroll-smooth h-[81vh]">
              {cartItems.map((item, i) => (
                <CartFilled key={i} item={item} />
              ))}
            </div>
          </>
        )}

        {/* bottom */}
        <CartBottom />
      </div>
    </>
  );
};

export default Cart;
