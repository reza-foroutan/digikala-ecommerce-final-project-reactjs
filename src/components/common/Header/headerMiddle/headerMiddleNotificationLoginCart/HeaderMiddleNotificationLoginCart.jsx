import HeaderMiddleCart from "../headerMiddleCart/HeaderMiddleCart";
import HeaderMiddleLogin from "../headerMiddleLogin/HeaderMiddleLogin";
import HeaderMiddleNotification from "../headerMiddleNotification/HeaderMiddleNotification";

const HeaderMiddleNotificationLoginCart = () => {
  return (
    <>
      <section className="w-[20%] h-11 notification-box-login-box-cart-box">
        <div className="notification-box-login-box-cart-box-wrapper w-full h-11 flex justify-start items-center">
          <HeaderMiddleNotification />
          {/* Initialize header middle login box Website */}
          <HeaderMiddleLogin />
          {/* End Initialize header middle login box Website */}
          <span className="header-middle-divider block bg-neutral-200 mx-3 ml-4 w-[2px] h-6"></span>
          {/* Initialize header middle cart box Website */}
          <HeaderMiddleCart />
          {/* End Initialize header middle cart box Website */}
        </div>
      </section>
    </>
  );
};

export default HeaderMiddleNotificationLoginCart;
