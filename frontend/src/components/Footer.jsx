import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { images } from "../constants";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 gap-x-5 gap-y-10 px-5 py-10 md:grid-cols-12 md:pt-20 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">Product</h3>
          <ul className="mt-5 space-y-4 text-sm text-[#959EAD] md:text-base">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">Services</h3>
          <ul className="mt-5 space-y-4 text-sm text-[#959EAD] md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="font-bold text-dark-light md:text-lg">Company</h3>
          <ul className="mt-5 space-y-4 text-sm text-[#959EAD] md:text-base">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="font-bold text-dark-light md:text-lg">More</h3>
          <ul className="mt-5 space-y-4 text-sm text-[#959EAD] md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="mx-auto brightness-0 invert md:mx-0"
          />
          <p className="mt-4 text-center text-sm text-dark-light md:text-left md:text-base lg:text-sm">
            Build a modern and creative website with mkaiblog
          </p>
          <ul className="mt-5 flex items-center justify-center space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineTwitter className="h-auto w-6" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="h-auto w-6" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="h-auto w-6" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="h-auto w-6" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="h-auto w-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden flex-col items-center space-y-4 md:col-span-12 md:flex lg:col-span-10">
          <div className="rounded-full bg-primary p-3 text-white">
            <AiFillHeart className="h-auto w-7" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2024. Created with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
