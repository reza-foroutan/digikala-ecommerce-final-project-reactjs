import HeaderMiddleLogoSearchComponent from "./HeaderMiddleLogoSearch/HeaderMiddleLogoSearch";
import HeaderMiddleNotificationLoginCartComponent from "./HeaderMiddleNotificationLoginCart/HeaderMiddleNotificationLoginCart";

const HeaderMiddleComponent = () => {
  return (
    <>
      <div className="main-header-middle w-full h-[68px] bg-neutral-000 relative z-5">
        {/* Initialize header middle Website */}
        <div class="header-middle h-[68px] flex w-full container-4xl-w mx-auto relative justify-between md:px-4 md:box-border grow">
          {/* Initialize header middle wrpper Website */}
          <div class="w-full py-3 flex relative z-2 box-border">
            {/* Initialize header middle log box search Website  */}
            <HeaderMiddleLogoSearchComponent />
            {/* End Initialize header middle log box search Website */}
            {/* Initialize header middle notification box login box cart box Website  */}
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
