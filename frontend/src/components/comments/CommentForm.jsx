import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHanlder,
  formCancelHandler = null,
  initialText = "",
  loading = false,
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHanlder(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end rounded-lg border border-primary p-4">
        <textarea
          className="w-full bg-transparent focus:outline-none"
          rows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col-reverse items-center gap-x-2 gap-y-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="rounded-lg border border-red-500 px-6 py-2.5 text-red-500"
            >
              Cancel
            </button>
          )}
          <button
            disabled={loading}
            type="submit"
            className="rounded-lg bg-primary px-6 py-2.5
         font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
