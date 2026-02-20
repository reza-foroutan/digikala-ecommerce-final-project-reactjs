import HeaderBottomComponent from "./headerBottom/HeaderBottom";
import HeaderMiddleComponent from "./headerMiddle/HeaderMiddle";
import HeaderTopComponent from "./headerTop/HeaderTop";
import styles from "./styles/styleHeader.module.css";

const HeaderComponent = () => {
  return (
    <>
      {/* Initialize main header Website */}
      <div
        className={`${styles.mainHeader} fixed w-full h-[168px] pr-0 box-border top-0 left-0 bg-neutral-000 z-4 shadow`}
      >
        {/* Initialize header Website */}
        <header
          className={`${styles.header} w-full h-[168px] flex flex-col bg-neutral-000 relative`}
        >
          {/* Initialize header top Website */}
          <HeaderTopComponent />
          {/* End Initialize header top Website */}
          {/* Initialize main header middle Website */}
          <HeaderMiddleComponent />
          {/* End Initialize main header middle Website */}
          <HeaderBottomComponent />
          {/* Initialize Main Header Bottom Website */}
          {/* End Initialize Main Header Bottom Website */}
        </header>
        {/* End Initialize header Website */}
      </div>
      {/* End Initialize main header Website */}
    </>
  );
};

export default HeaderComponent;
