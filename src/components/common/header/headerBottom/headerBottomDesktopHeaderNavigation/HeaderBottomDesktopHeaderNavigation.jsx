import DesktopHeaderNavigationCategoriesComponent from "./desktopHeaderNavigationCategories/DesktopHeaderNavigationCategories";
import DesktopHeaderNavigationShopComponent from "./desktopHeaderNavigationShop/DesktopHeaderNavigationShop";
import styles from "./styles/styleHeaderBottomDesktopHeaderNavigation.module.css";
const HeaderBottomDesktopHeaderNavigationComponent = () => {
  return (
    <>
      <section
        className={`${styles.mainHeaderBottomDesktopHeaderNavigation} w-5/6 h-10 flex relative`}
      >
        <div className="header-navigation w-full h-10 flex relative">
          {/* Initialize desktop header navigation Categories */}
          <DesktopHeaderNavigationCategoriesComponent />
          {/* End Initialize desktop header navigation Categories */}
          {/* Initialize desktop header navigation shop Website */}
          <DesktopHeaderNavigationShopComponent />
          {/* End Initialize desktop header navigation shop Website */}
        </div>
      </section>
    </>
  );
};

export default HeaderBottomDesktopHeaderNavigationComponent;
