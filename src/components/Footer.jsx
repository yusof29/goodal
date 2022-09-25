import React from "react";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-bgcolor w-full">
      <div className="container mx-auto py-7 px-6 lg:px-16 flex justify-between items-center">
        <p className="text-primary font-urbanist">Copyright © 2022 goodal </p>

        <div>
          <ul className="flex space-x-4 text-xl">
            <li>
              <a href="/">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <BsYoutube />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
