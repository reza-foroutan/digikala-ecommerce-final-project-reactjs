import { Link } from "react-router-dom";
import CartOffIcon from "../../../../icons/CartOff";

const HeaderMiddleCart = () => {
  return (
    <>
      <div className="header-middle-cart-box w-10 h-10 flex justify-center items-center">
        <Link
          to={"/"}
          className="cart-box-link w-10 h-10 flex justify-center items-center"
        >
          <div className="cart-box-link-box flex justify-center items-center">
            <CartOffIcon className="w-[24px] h-[24px] align-middle fill-icon-high-emphasis" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeaderMiddleCart;
