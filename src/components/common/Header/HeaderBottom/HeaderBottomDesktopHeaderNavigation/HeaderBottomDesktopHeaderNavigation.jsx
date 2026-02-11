// src/components/HeaderBottomDesktopHeaderNavigation.jsx
import HeaderNavigationCategories from "./HeaderNavigationCategories/HeaderNavigationCategories";
import HeaderNavigationShop from "./HeaderNavigationCategories/HeaderNavigationShop/HeaderNavigationShop";
import styles from "./styles/HeaderBottomDesktopHeaderNavigation.module.css";

const HeaderBottomDesktopHeaderNavigation = () => {
  return (
    <div
      className={`${styles.mainHeaderBottomDesktopHeaderNavigation} w-5/6 h-10 flex relative`}
    >
      <div
        className={`${styles.headerNavigation} w-full h-10 flex relative px-4 box-border`}
      >
        {/* Initialize desktop header navigation Categories Website */}
        <HeaderNavigationCategories />
        {/* End Initialize desktop header navigation Categories Website */}

        {/* Initialize desktop header navigation shop Website */}
        <HeaderNavigationShop />
        {/* End Initialize desktop header navigation shop Website */}
      </div>
    </div>
  );
};

export default HeaderBottomDesktopHeaderNavigation;
