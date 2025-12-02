import DesktopHeaderNavigationShopComponent from "../../DesktopHeaderNavigationShop/DesktopHeaderNavigationShop";
import DesktopHeaderNavigationSiteComponent from "../../DesktopHeaderNavigationSite/DesktopHeaderNavigationSite";
import HeaderNavigationCategoriesComponent from "./HeaderNavigationCategories/HeaderNavigationCategories";

const HeaderNavigationComponent = () => {
  return (
    <>
      <div className="header-navigation w-full h-10 flex relative">
        {/* <!-- Initialize desktop header navigation Categories Website --> */}
        <HeaderNavigationCategoriesComponent />
        {/* <!-- End Initialize desktop header navigation Categories Website --> */}
        {/* <!-- Initialize desktop header navigation shop Website --> */}
        <DesktopHeaderNavigationShopComponent />
        {/* <!-- End Initialize desktop header navigation shop Website --> */}
        {/* <!-- Initialize desktop header navigation site Website --> */}
        <DesktopHeaderNavigationSiteComponent />
        {/* End Initialize desktop header navigation site Website  */}
      </div>
    </>
  );
};

export default HeaderNavigationComponent;
