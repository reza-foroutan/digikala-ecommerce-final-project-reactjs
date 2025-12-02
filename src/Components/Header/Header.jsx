import HeaderBottomComponent from "./HeaderBottom/HeaderBottom";
import HeaderMiddleComponent from "./HeaderMiddle/HeaderMiddle";
import HeaderTopComponent from "./HeaderTop/HeaderTop";

const HeaderComponent = () => {
  return (
    <>
      <div className="main-header fixed w-full h-[168px] pr-0 box-border top-0 left-0 bg-neutral-000 z-4 shadow">
        <header className="header w-full h-[168px] flex flex-col bg-neutral-000 relative">
          <HeaderTopComponent />
          {/* Initialize main header middle Website */}
          <HeaderMiddleComponent />
          {/* End Initialize main header middle Website */}
          {/* Initialize Main Header Bottom Website */}
          <HeaderBottomComponent />
          {/* End Initialize Main Header Bottom Website */}
        </header>
      </div>
    </>
  );
};

export default HeaderComponent;
