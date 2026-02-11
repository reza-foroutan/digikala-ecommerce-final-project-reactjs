import MainHeaderMiddleComponent from "./MainHeaderMiddle/MainHeaderMiddle";
import MainHeaderTopComponent from "./MainHeaderTopComponent/MainHeaderTopComponent";
import styles from "./styles/header.module.css";
const HeaderComponent = () => {
  return (
    <>
      <div
        className={`${styles.mainHeader} fixed w-full h-42 pr-0 box-border top-0 left-0 bg-neutral-000 z-4 shadow`}
      >
        {/* Initialize header Website */}
        <div
          className={`${styles.Header} w-full h-42 flex flex-col bg-neutral-000 relative`}
        >
          {/* Initialize header top Website */}
          <MainHeaderTopComponent />
          {/* End Initialize header top Website */}
          {/* Initialize main header middle Website */}
          <MainHeaderMiddleComponent />
          {/* End Initialize main header middle Website */}
          
        </div>
        {/* End Initialize header Website */}
      </div>
    </>
  );
};

export default HeaderComponent;
