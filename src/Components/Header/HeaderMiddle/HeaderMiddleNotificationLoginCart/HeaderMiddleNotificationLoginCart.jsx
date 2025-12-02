import HeaderMiddleCartComponent from "./HeaderMiddleCart/HeaderMiddleCart";
import HeaderMiddleLoginComponent from "./HeaderMiddleLogin/HeaderMiddleLogin";
import HeaderMiddleNotificationComponent from "./HeaderMiddleNotification/HeaderMiddleNotification";

const HeaderMiddleNotificationLoginCartComponent = () => {
  return (
    <>
      <section className="notification-box-login-box-cart-box w-[20%] h-11">
        <div className="notification-box-login-box-cart-box-wrapper w-full h-11 flex justify-end items-center">
          {/* Initialize header middle notification box Website */}
          <HeaderMiddleNotificationComponent />
          {/* End Initialize header middle notification box Website  */}
          {/* Initialize header middle login box Website */}
          <HeaderMiddleLoginComponent />
          {/* End Initialize header middle login box Website  */}
          <span className="header-middle-divider block bg-neutral-200 mx-3 w-px h-6"></span>
          {/* Initialize header middle cart box Website */}
          <HeaderMiddleCartComponent />
          {/* End Initialize header middle cart box Website  */}
        </div>
      </section>
    </>
  );
};

export default HeaderMiddleNotificationLoginCartComponent;
