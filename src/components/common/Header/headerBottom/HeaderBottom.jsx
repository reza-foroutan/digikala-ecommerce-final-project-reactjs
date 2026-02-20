import styles from "./styles/styleHeaderBottom.module.css";
const HeaderBottomComponent = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderBottom} w-full h-11 min-h-9 bg-neutral-000 flex justify-between items-center flex-wrap relative`}
      >
        <nav
          className={`${styles.mainHeaderBottomNavLocation} w-full h-11 min-h-9 px-4 box-border flex justify-between grow mx-auto relative`}
        >
          {/* Initialize desktop header navigation Website */}
          {/* End Initialize desktop header navigation Website */}
        </nav>
      </div>
    </>
  );
};

export default HeaderBottomComponent;
