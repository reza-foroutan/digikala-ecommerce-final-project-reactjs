import HeaderMiddleLogoSearchComponent from "./headerMiddleLogoSearch/HeaderMiddleLogoSearch";
import HeaderMiddleNotificationLoginCartComponent from "./headerMiddleNotificationLoginCart/HeaderMiddleNotificationLoginCart";
import styles from "./styles/styleHeaderMiddle.module.css";
const HeaderMiddleComponent = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderMiddle} w-full h-[68px] bg-neutral-000 relative z-5`}
      >
        {/* Initialize header middle Website */}
        <div
          className={`${styles.headerMiddle} h-[68px] flex w-full container-4xl-w mx-auto relative justify-between md:px-4 md:box-border grow`}
        >
          {/* Initialize header middle wrpper Website */}
          <div
            className={`${styles.headerMiddleWrapper} w-full py-3 flex relative z-2 box-border`}
          >
            {/* Initialize header middle logo box search Website */}
            <HeaderMiddleLogoSearchComponent />
            {/* End Initialize header middle logo box search Website */}
            {/* Initialize header middle notification box login box cart box Website */}
            <HeaderMiddleNotificationLoginCartComponent />
            {/* End Initialize header middle notification box login box cart box Website */}
          </div>
          {/* End Initialize header middle wrpper Website */}
        </div>
        {/* End Initialize header middle Website */}
      </div>
    </>
  );
};

export default HeaderMiddleComponent;
