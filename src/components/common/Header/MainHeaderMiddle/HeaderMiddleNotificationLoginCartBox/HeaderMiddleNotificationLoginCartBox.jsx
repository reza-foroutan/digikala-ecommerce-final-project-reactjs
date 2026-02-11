import HeaderMiddleLoginBox from "./HeaderMiddleLoginBox/HeaderMiddleLoginBox";
import HeaderMiddleNotificationBox from "./HeaderMiddleNotificationBox/HeaderMiddleNotificationBox";
import styles from "./styles/styleNotificationLoginCartBox.module.css";

const HeaderMiddleNotificationLoginCartBox = () => {
  return (
    <>
      <section className={`${styles.NotificationLoginCartBox}  w-[20%] h-11`}>
        <div
          className={`${styles.NotificationLoginCartBoxWrapper} w-full h-11 flex justify-end items-center`}
        >
          <HeaderMiddleNotificationBox />
          {/* Initialize header middle login box Website */}
          <HeaderMiddleLoginBox />
          {/* End Initialize header middle login box Website */}
        </div>
      </section>
    </>
  );
};

export default HeaderMiddleNotificationLoginCartBox;
