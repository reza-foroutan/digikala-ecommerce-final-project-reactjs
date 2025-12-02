import { Link } from "react-router-dom";

const HeaderMiddleCartComponent = () => {
  return (
    <>
      <div className="header-middle-cart-box w-10 h-10 flex justify-center items-center">
        <Link
          to="./checkout/cart/"
          className="cart-box-link w-10 h-10 flex justify-center items-center"
        >
          <div className="cart-box-link-box flex justify-center items-center">
            <svg
              className="w-6 h-6 align-middle fill-icon-high-emphasis"
              id="cartOff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeaderMiddleCartComponent;
