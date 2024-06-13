/* eslint-disable react/prop-types */

const ErrorInputForm = ({ statusError }) => {
  return (
    <>
      {statusError && (
        <p className="mt-1 text-xs text-red-500">{statusError.message}</p>
      )}
    </>
  );
};

export default ErrorInputForm;
