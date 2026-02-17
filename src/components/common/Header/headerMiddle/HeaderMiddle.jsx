import HeaderMiddleLogoSearchBoxComponent from "./HeaderMiddleLogoSearchBox/HeaderMiddleLogoSearchBox";
import styles from "./styles/styleHeaderMiddleComponent.module.css";
const HeaderMiddleComponent = () => {
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
        </div>
        {/* End Initialize header middle wrpper Website */}
      </div>
    </>
  );
};

export default HeaderMiddleComponent;
