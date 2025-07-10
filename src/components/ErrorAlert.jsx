
export const ErrorAlert = ({ error, enteredSearchText }) => {
  return (
    <div
      className="bg-red-600/20 text-red-300 p-4 m-6 rounded-lg shadow-md border-l-4 border-r-4 border-red-500"
      role="alert"
    >
      <div className="text-sm font-medium">
        <strong>Oh snap!</strong>{" "}
        <span className="ml-1">
          '{enteredSearchText}' resulted in '{error}'
        </span>
      </div>
    </div>
  );
};
