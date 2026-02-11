import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center p-20">
        <h1 className="text-4xl font-bold">404</h1>
        <Link to="/" className="text-blue-500 underline">
          بازگشت به خانه
        </Link>
      </div>
    </>
  );
};

export default NotFound;
