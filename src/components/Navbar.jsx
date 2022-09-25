import React, { useEffect, useState } from "react";

import Logo from "../assets/logo.jpg";
import { RiShoppingBagLine, RiShoppingBagFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

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
    <header
      className={
        navColor
          ? "bg-bgcolor fixed w-full z-10 transition ease-in-out duration-200 drop-shadow-lg"
          : "bg-bgcolor2 fixed w-full z-10 transition ease-in-out duration-200"
      }
    >
      <nav className="container mx-auto py-4 px-6 lg:px-16 flex justify-between items-center ">
        <div className="text-2xl flex md:hidden" onClick={handleNav}>
          <HiMenuAlt2 />
        </div>

        <div>
          <NavLink to="/">
            <img className="w-20" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div className="flex items-center space-x-3">
          <ul className="space-x-3 hidden md:flex">
            <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : null)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : null)}
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>

          {/* text-zinc-600 hover:text-primary */}

          <div className="flex group text-xl text-zinc-600 hover:text-primary">
            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : null)}
              to="/cart"
            >
              <RiShoppingBagLine className="group-hover:hidden" />
              <RiShoppingBagFill className="group-hover:flex hidden" />
            </NavLink>
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
                className={({ isActive }) => (isActive ? "text-primary" : null)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="text-zinc-600 font-urbanist font-bold hover:text-primary transition ease-in-out duration-200">
              <NavLink
                onClick={handleNav}
                className={({ isActive }) => (isActive ? "text-primary" : null)}
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
