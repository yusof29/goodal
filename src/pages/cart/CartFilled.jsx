import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../features/cart/cartSlice";

const CartFilled = ({
  item: { id, name, type, price, image, image2, quantity },
}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, name }));
  };

  const handleIncreaseItemQuantity = () => {
    dispatch(setIncreaseItemQTY({ id }));
  };

  const handleDecreaseItemQuantity = () => {
    dispatch(setDecreaseItemQTY({ id }));
  };

  return (
    <div className="flex-1">
      <div className="p-4 flex justify-between items-center font-urbanist gap-5">
        {/* image */}
        <div className="group relative h-20 w-20 md:h-32 md:w-32">
          <img
            src={image}
            alt={name}
            className="absolute h-auto w-full object-cover group-hover:opacity-0 transition ease-in-out duration-500"
          />

          <img
            src={image2}
            alt={name}
            className="absolute h-auto w-full  object-cover opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 rounded-lg shadow-xl"
          />
        </div>

        {/* name */}
        <div className="space-y-3 w-[119px] md:w-[243px]">
          <div>
            <h1 className="text-xs md:text-2xl font-bold text-primary">
              {name}
            </h1>

            <p className="text-xs md:text-2xl text-primary">{type}</p>
          </div>

          <div className="flex items-center justify-start gap-4">
            <button
              onClick={handleDecreaseItemQuantity}
              className="bg-primary p-1 rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out"
            >
              <FaMinus className="text-white md:w-5 md:h-5" />
            </button>

            <span className="bg-primary text-white rounded text-sm font-semibold tracking-widest py-0.5 px-2 md:py-3 md:px-3 md:w-5 md:h-5 flex items-center justify-center">
              {quantity}
            </span>

            <button
              onClick={handleIncreaseItemQuantity}
              className="bg-primary p-1 rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out"
            >
              <FaPlus className="text-white md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* price */}
        <div className="flex flex-col items-center justify-center gap-3 w-[30px]">
          <h2 className="text-lg md:text-2xl font-bold text-primary">
            ${price * quantity}
          </h2>

          <button
            onClick={handleRemoveItem}
            className="bg-primary p-1 rounded hover:bg-secondary active:scale-90 active:bg-secondary transition-all duration-100 ease-in-out"
          >
            <FaTrashAlt className="text-white md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFilled;
