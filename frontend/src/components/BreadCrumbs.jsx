import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center overflow-x-auto whitespace-nowrap py-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="font-roboto text-xs text-black opacity-50 md:text-sm"
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-3">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
