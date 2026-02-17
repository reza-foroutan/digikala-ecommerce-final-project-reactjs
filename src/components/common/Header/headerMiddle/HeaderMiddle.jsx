import HeaderMiddleLogo from "./headerMiddleLogo/headerMiddleLogo";
import HeaderMiddleNotificationLoginCart from "./headerMiddleNotificationLoginCart/HeaderMiddleNotificationLoginCart";
import HeaderMiddleSearch from "./headerMiddleSearch/HeaderMiddleSearch";
import styles from "./styles/styleHeaderMiddleComponent.module.css";
const HeaderMiddleComponent = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderMiddle} w-full h-17 bg-neutral-000  relative z-5`}
      >
        {/* Initialize header middle Website */}
        <div
          className={`${styles.headerMiddle} h-[68px] flex w-full container-4xl-w mx-auto relative justify-between md:px-4 md:box-border grow`}
        >
          {/* Initialize header middle wrpper Website */}
          <div
            className={`w-full py-3 px-3 flex relative z-2 box-border justify-center items-center`}
          >
            {/* Initialize header middle log box search Website */}
            <section className="h-[44px] flex flex-1 items-center grow">
              {/* Initialize header middle logo box Website */}
              <HeaderMiddleLogo />
              {/* End Initialize header middle logo box Website */}

              {/* Initialize header middle search box Website */}
              <HeaderMiddleSearch />
              {/* End Initialize header middle search box Website */}
            </section>
            {/* End Initialize header middle log box search Website */}
            {/* Initialize header middle notification box login box cart box Website */}
            <HeaderMiddleNotificationLoginCart />
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
