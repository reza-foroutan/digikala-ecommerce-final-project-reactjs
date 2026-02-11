import HeaderBottomDesktopHeaderNavigation from "./HeaderBottomDesktopHeaderNavigation/HeaderBottomDesktopHeaderNavigation";
import styles from "./styles/styleHeaderBottom.module.css";

const HeaderBottom = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderBottom} w-full h-11 min-h-9 bg-neutral-000 flex justify-between items-center flex-wrap relative`}
      >
        <nav
          className={`${styles.MainHeaderBottomNavLocation} w-full h-11 min-h-9 px-4 box-border flex justify-between grow mx-auto relative`}
        >
          {/* Initialize desktop header navigation Website */}
          <HeaderBottomDesktopHeaderNavigation />
          {/* End Initialize desktop header navigation Website */}
        </nav>
      </div>
    </>
  );
};

export default HeaderBottom;
