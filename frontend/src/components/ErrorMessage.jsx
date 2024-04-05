const ErrorMessage = ({ message }) => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-red-400 px-4 py-2 text-gray-900">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
