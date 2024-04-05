import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";

const Pagination = ({
  onPageChange,
  currentPage,
  siblingCount = 1,
  totalPageCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="xs:flex-row xs:justify-between flex flex-col items-center bg-white px-5 py-5">
      <div className="flex items-center">
        <button
          disabled={currentPage === 1}
          type="button"
          className="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onPrevious}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <button className="w-full cursor-default border bg-white px-4 py-2 text-base">
                &#8230;
              </button>
            );
          }

          return (
            <button
              key={pageNumber}
              type="button"
              className={`w-full border px-4 py-2 text-base ${
                pageNumber === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          disabled={currentPage === lastPage}
          type="button"
          className="w-full rounded-r-xl border-b border-r border-t bg-white p-4 text-base text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onNext}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
