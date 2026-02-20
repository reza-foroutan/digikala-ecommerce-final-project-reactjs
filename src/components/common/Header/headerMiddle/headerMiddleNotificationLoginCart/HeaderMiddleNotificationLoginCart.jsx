import HeaderMiddleCartBoxComponent from "./headerMiddleCartBox/HeaderMiddleCartBox";
import HeaderMiddleLoginComponent from "./headerMiddleLogin/HeaderMiddleLogin";
import HeaderMiddleNotificationComponent from "./headerMiddleNotification/HeaderMiddleNotification";
import styles from "./styles/styleHeaderMiddleNotificationLoginCart.module.css";
const HeaderMiddleNotificationLoginCartComponent = () => {
  return (
    <>
      <section
        className={`${styles.notificationBoxLoginBoxCartBox} w-[20%] flex justify-center items-center`}
      >
        <div
          className={`${styles.notificationBoxLoginBoxCartBoxWrapper} w-full h-11 flex justify-start items-center`}
        >
          {/* Initialize header middle notification box Website */}
          <HeaderMiddleNotificationComponent />
          {/* End Initialize header middle notification box Website */}
          {/* Initialize header middle login box Website */}
          <HeaderMiddleLoginComponent />
          {/* End Initialize header middle login box Website */}
          <span className="header-middle-divider block bg-neutral-200 mx-3 w-[2px] h-7"></span>
          {/* Initialize header middle cart box Website */}
          <HeaderMiddleCartBoxComponent />
          {/* End Initialize header middle cart box Website */}
        </div>
      </section>
    </>
  );
};

export default HeaderMiddleNotificationLoginCartComponent;
