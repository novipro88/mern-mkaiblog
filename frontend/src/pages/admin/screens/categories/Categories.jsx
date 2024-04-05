import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useDataTable } from "../../../../hooks/useDataTable";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../../../../services/index/postCategories";
import DataTable from "../../components/DataTable";
import { useState } from "react";

const Categories = () => {
  const [categoryTitle, seTcategoryTitle] = useState("");

  const { mutate: mutateCreateCategory, isLoading: isLoadingCreateCategory } =
    useMutation({
      mutationFn: ({ token, title }) => {
        return createCategory({
          token,
          title,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["categories"]);
        toast.success("Category is created");
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const {
    userState,
    currentPage,
    searchKeyword,
    data: categoriesData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllCategories(searchKeyword, currentPage),
    dataQueryKey: "categories",
    deleteDataMessage: "Category is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return deleteCategory({
        slug,
        token,
      });
    },
  });

  const handleCreateCategory = () => {
    mutateCreateCategory({
      token: userState.userInfo.token,
      title: categoryTitle,
    });
  };

  return (
    <div className="grid grid-cols-12 gap-x-4">
      <div className="col-span-4 py-8">
        <h4 className="text-lg leading-tight">Add New Category</h4>
        <div className="d-form-control mt-6 w-full">
          <input
            value={categoryTitle}
            className="d-input-bordered d-input border-slate-300 font-roboto text-xl font-medium text-dark-hard !outline-slate-300"
            onChange={(e) => seTcategoryTitle(e.target.value)}
            placeholder="category title"
          />
          <button
            disabled={isLoadingCreateCategory}
            type="button"
            onClick={handleCreateCategory}
            className="mt-3 w-fit rounded-lg bg-green-500 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            Add Category
          </button>
        </div>
      </div>
      <div className="col-span-8">
        <DataTable
          pageTitle=""
          dataListName="Categories"
          searchInputPlaceHolder="Category title..."
          searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
          searchKeywordOnChangeHandler={searchKeywordHandler}
          searchKeyword={searchKeyword}
          tableHeaderTitleList={["Title", "Created At", ""]}
          isLoading={isLoading}
          isFetching={isFetching}
          data={categoriesData?.data}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          headers={categoriesData?.headers}
          userState={userState}
        >
          {categoriesData?.data.map((category) => (
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <p className="whitespace-no-wrap text-gray-900">
                    {category.title}
                  </p>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">
                  {new Date(category.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </td>
              <td className="space-x-5 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <button
                  disabled={isLoadingDeleteData}
                  type="button"
                  className="text-red-600 hover:text-red-900 disabled:cursor-not-allowed disabled:opacity-70"
                  onClick={() => {
                    deleteDataHandler({
                      slug: category?._id,
                      token: userState.userInfo.token,
                    });
                  }}
                >
                  Delete
                </button>
                <Link
                  to={`/admin/categories/manage/edit/${category?._id}`}
                  className="text-green-600 hover:text-green-900"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default Categories;
