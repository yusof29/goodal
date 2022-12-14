import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCloseCart, setOpenCart } from "../features/cart/cartSlice";

import Logo from "../assets/logo.jpg";
import { HiMenuAlt2, HiOutlineShoppingBag } from "react-icons/hi";

import { Cart } from "../pages/cart/index.js";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();
  const { cartState, cartTotalQuantity } = useSelector((store) => store.cart);

  // mobile nav
  const handleNav = () => setNav(!nav);

  // cart nav
  const handleCartNav = () => {
    if (cartState) {
      dispatch(
        setCloseCart({
          cartState: false,
        })
      );

      document.body.style.overflow = "unset";
    } else {
      dispatch(
        setOpenCart({
          cartState: true,
        })
      );

      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={
          navColor
            ? "bg-bgcolor fixed w-full z-10 transition ease-in-out duration-200 drop-shadow-lg"
            : "bg-bgcolor2 fixed w-full z-10 transition ease-in-out duration-200"
        }
      >
        <nav className="container mx-auto py-4 px-6 lg:px-16 flex justify-between items-center ">
          {/* mobile nav */}
          <div className="text-2xl flex md:hidden" onClick={handleNav}>
            <HiMenuAlt2 />
          </div>

          {/* logo */}
          <div>
            <NavLink to="/">
              <img className="w-20" src={Logo} alt="logo" />
            </NavLink>
          </div>

          {/* nav links */}
          <div className="flex items-center space-x-3">
            {/* about and products */}
            <ul className="space-x-3 hidden md:flex">
              <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : null
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : null
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>

            {/* cart */}
            <div
              className="flex justify-end items-center text-xl text-zinc-600 hover:text-primary relative cursor-pointer"
              onClick={() => {
                handleCartNav();

                if (nav) {
                  handleNav();
                }
              }}
            >
              <HiOutlineShoppingBag size={25} />

              <span className="bg-slate-900 text-slate-100 rounded-full w-5 h-5 text-[0.65rem] flex items-center justify-center absolute top-4 left-2">
                {cartTotalQuantity}
              </span>
            </div>
          </div>
        </nav>

        {/* mobile menu */}
        <div className={nav ? "w-full absolute md:hidden" : "hidden"}>
          <div
            className={
              navColor
                ? "bg-bgcolor transition ease-in-out duration-200"
                : "bg-bgcolor2 transition ease-in-out duration-200 border-zinc-200 border-b"
            }
          >
            <ul className="space-y-3 container mx-auto py-3 px-6 lg:px-16">
              <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
                <NavLink
                  onClick={handleNav}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : null
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
                <NavLink
                  onClick={handleNav}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : null
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Cart handleCartNav={handleCartNav} />
    </>
  );
};

export default Navbar;
