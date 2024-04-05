import React from "react";
import { Link } from "react-router-dom";
import { images, stables } from "../../../constants";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full rounded-lg p-4 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="mt-5 grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex flex-nowrap items-center space-x-3"
          >
            <img
              className="aspect-square w-1/5 rounded-lg object-cover"
              src={
                item?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo
                  : images.samplePostImage
              }
              alt={item.title}
            />
            <div className="font-roboto text-sm font-medium text-dark-hard">
              <h3 className="font-roboto text-sm font-medium text-dark-hard md:text-base lg:text-lg">
                <Link to={`/blog/${item.slug}`}>{item.title}</Link>
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-8 font-roboto font-medium text-dark-hard md:text-xl">
        Tags
      </h2>
      {tags.length === 0 ? (
        <p className="mt-2 text-xs text-slate-500">
          There is not tags for this post
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
          {tags.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block rounded-md bg-primary px-3 py-1.5 font-roboto text-xs text-white md:text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestedPosts;
