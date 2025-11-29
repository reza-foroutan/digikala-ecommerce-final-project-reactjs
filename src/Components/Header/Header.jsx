import HeaderTopComponent from "./HeaderTop/HeaderTop";

const HeaderComponent = () => {
  return (
    <>
      <div className="main-header fixed w-full h-[168px] pr-0 box-border top-0 left-0 bg-neutral-000 z-4 shadow">
        <header className="header w-full h-[168px] flex flex-col bg-neutral-000 relative">
          {/* Initialize header top Website */}
          <HeaderTopComponent />
          {/* End Initialize header top Website */}
        </header>
      </div>
    </>
  );
};

export default HeaderComponent;
