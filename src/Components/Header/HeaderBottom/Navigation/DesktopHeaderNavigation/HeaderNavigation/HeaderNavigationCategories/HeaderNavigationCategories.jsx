import SubMenuComponent from "./SubMenu/SubMenu";

const HeaderNavigationCategoriesComponent = () => {
  return (
    <>
      <div className="header-navigation-categories w-[143px] h-10 flex relative">
        <div className="nav-item w-full h-full flex items-center group relative">
          <span className="header-main-menu w-full text-[14px] font-IRANYekanXFaNum leading-10 whitespace-nowrap flex items-center text-neutral-700">
            <div className="nav-item-svg ml-1">
              <svg
                className="w-5 h-5 align-middle fill-icon-high-emphasis"
                id="hamburgerMenu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            دسته‌بندی کالاها
          </span>
          {/* <!-- Initialize Sub Menu Website --> */}
          <SubMenuComponent />
          {/* <!-- End Initialize Sub Menu Website --> */}
        </div>
      </div>
    </>
  );
};

export default HeaderNavigationCategoriesComponent;
