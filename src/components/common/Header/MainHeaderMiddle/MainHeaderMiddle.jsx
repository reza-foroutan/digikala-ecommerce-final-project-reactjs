import HeaderMiddleCartBox from "./HeaderMiddleCartBox/HeaderMiddleCartBox";
import HeaderMiddleLogoSearchBoxComponent from "./HeaderMiddleLogoSearchBox/HeaderMiddleLogoSearchBox";
import HeaderMiddleNotificationLoginCartBox from "./HeaderMiddleNotificationLoginCartBox/HeaderMiddleNotificationLoginCartBox";
import styles from "./styles/styleMainHeaderMiddle.module.css";
const MainHeaderMiddleComponent = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderMiddle} w-full h-17 bg-neutral-000 relative z-5`}
      >
        {/* Initialize header middle wrpper Website */}
        <div className={`w-full py-3 px-4 flex relative z-2 box-border`}>
          {/* Initialize header middle logo box search Website */}
          <HeaderMiddleLogoSearchBoxComponent />
          {/* End Initialize header middle logo box search Website */}
          {/* Initialize header middle notification box login box cart box Website */}
          <HeaderMiddleNotificationLoginCartBox />
          {/* End Initialize header middle notification box login box cart box Website */}
          <span className="header-middle-divider block mt-2.5 bg-neutral-200 mx-3 w-[1.5px] h-6"></span>
          {/* Initialize header middle cart box Website */}
          <HeaderMiddleCartBox />
          {/* End Initialize header middle cart box Website */}
        </div>
        {/* End Initialize header middle wrpper Website */}
      </div>
    </>
  );
};

export default MainHeaderMiddleComponent;
