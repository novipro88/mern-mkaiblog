import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ className, onSearchKeyword }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchKeyword({ searchKeyword });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex flex-col gap-y-2.5 ${className}`}
    >
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-[#959EAD]" />
        <input
          className="w-full rounded-lg py-3 pl-12 pr-3 font-semibold text-dark-soft shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] placeholder:font-bold placeholder:text-[#959EAD] focus:outline-none md:py-4"
          type="text"
          placeholder="Search article"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-white md:absolute md:right-2 md:top-1/2 md:w-fit md:-translate-y-1/2 md:py-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
