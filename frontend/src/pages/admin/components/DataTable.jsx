import Pagination from "../../../components/Pagination";

const DataTable = ({
  pageTitle,
  dataListName,
  searchKeywordOnSubmitHandler,
  searchInputPlaceHolder,
  searchKeywordOnChangeHandler,
  searchKeyword,
  tableHeaderTitleList,
  isLoading,
  isFetching,
  data,
  children,
  setCurrentPage,
  currentPage,
  headers,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{pageTitle}</h1>

      <div className="mx-auto w-full px-4">
        <div className="py-8">
          <div className="mb-1 flex w-full flex-row justify-between sm:mb-0">
            <h2 className="text-2xl leading-tight">{dataListName}</h2>
            <div className="text-end">
              <form
                onSubmit={searchKeywordOnSubmitHandler}
                className="flex w-3/4 max-w-sm flex-col justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0"
              >
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder={searchInputPlaceHolder}
                    onChange={searchKeywordOnChangeHandler}
                    value={searchKeyword}
                  />
                </div>
                <button
                  className="flex-shrink-0 rounded-lg bg-purple-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Filter
                </button>
              </form>
            </div>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {tableHeaderTitleList.map((title, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-normal uppercase text-gray-800"
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {isLoading || isFetching ? (
                    <tr>
                      <td colSpan={5} className="w-full py-10 text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : data?.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="w-full py-10 text-center">
                        No records found
                      </td>
                    </tr>
                  ) : (
                    children
                  )}
                </tbody>
              </table>
              {!isLoading && (
                <Pagination
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                  totalPageCount={JSON.parse(headers?.["x-totalpagecount"])}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
