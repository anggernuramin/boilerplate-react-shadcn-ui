import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="pt-20 text-3xl font-bold text-center text-primary">
        Page 404 2024
      </h1>
      <div className="w-full mt-5 flex-center">
        <button className="btn btn-active btn-secondary">
          <Link to="/" className="font-bold text-center ">
            Back to Home
          </Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
