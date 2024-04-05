const ArticleCardSkeleton = ({ className }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} animate-pulse`}
    >
      {/* image */}
      <div className="aspect-video w-full bg-slate-300" />
      <div className="p-5">
        {/* title */}
        <div className="mt-4 h-2 w-56 rounded-lg bg-slate-300" />
        {/* caption */}
        <div className="mt-4 h-2 w-24 rounded-lg bg-slate-300" />
        <div className="mt-6 flex flex-nowrap items-center justify-between">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            {/* profile image */}
            <div className="h-9 w-9 rounded-full bg-slate-300 md:h-10 md:w-10" />
            <div className="flex flex-col">
              {/* user's name */}
              <div className="h-2 w-24 rounded-lg bg-slate-300" />
              {/* verified status */}
              <div className="mt-2 h-2 w-16 rounded-lg bg-slate-300" />
            </div>
          </div>
          {/* date */}
          <div className="mt-4 h-2 w-10 rounded-lg bg-slate-300" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
