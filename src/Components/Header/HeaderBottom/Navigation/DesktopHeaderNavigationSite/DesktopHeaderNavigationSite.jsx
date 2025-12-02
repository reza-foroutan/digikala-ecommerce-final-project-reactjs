const DesktopHeaderNavigationSiteComponent = () => {
  return (
    <>
      <div className="header-navigation-site w-[593px] h-10 relative flex justify-start items-center">
        {/* <!-- item 01 --> */}
        <div className="nav-item w-fit px-3 box-border h-full flex items-center">
          <a
            href="./incredible-offers/"
            target="_self"
            className="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
          >
            سوالی دارید؟
          </a>
        </div>
        {/* <!-- end item 01 --> */}
        {/* <!-- item 02 --> */}
        <div className="nav-item w-fit px-3 box-border h-full flex items-center">
          <a
            href="./fresh/"
            target="_self"
            className="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
          >
            در Document بفروشید!
          </a>
        </div>
        {/* <!-- end item 02 --> */}
      </div>
    </>
  );
};

export default DesktopHeaderNavigationSiteComponent;
