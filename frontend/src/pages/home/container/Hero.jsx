import React from "react";

import { images } from "../../../constants";
// import Search from "../../../components/Search";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="text-center font-roboto text-3xl font-bold text-dark-soft md:text-5xl lg:max-w-[540px] lg:text-left lg:text-4xl xl:text-5xl">
          Read the most interesting articles
        </h1>
        <p className="mt-4 text-center text-dark-light md:text-xl lg:text-left lg:text-base xl:text-xl">
          Generating catchy titles requires creating messages that excite and
          resonate with your audience, hinting at the main objective of your
          post, and conveying that you are a trusted source of information.
          Combine these ingredients, and you will be sure to have a title that
          excites, engages, and informs.
        </p>
        {/* <Search className="mt-10 lg:mt-6 xl:mt-10" /> */}
        <div className="mt-4 flex flex-col lg:mt-7 lg:flex-row lg:flex-nowrap lg:items-start lg:gap-x-4">
          <span className="mt-2 font-semibold italic text-dark-light lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="mt-3 flex flex-wrap gap-x-2.5 gap-y-2.5 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 font-semibold text-primary">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 font-semibold text-primary">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 font-semibold text-primary">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:1/2 hidden lg:block">
        <img
          className="ml-5"
          src={images.HeroImage}
          style={{ height: 450, width: 600 }}
          alt="wellcome to mkai-blog"
        />
      </div>
    </section>
  );
};

export default Hero;
