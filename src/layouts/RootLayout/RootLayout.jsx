import { Outlet } from "react-router-dom";
import styles from "./styles/styleRootLayout.module.css";
import HeaderComponent from "../../components/common/header/Header";

const RootLayout = () => {
  return (
    <>
      {/* Initialize main-container Website */}
      <div
        className={`${styles.mainContainer} w-full h-full min-h-screen relative`}
      >
        {/* Initialize wrapper Website */}
        <div
          className={`${styles.wrapper} h-full flex flex-col bg-neutral-000 items-center`}
        >
          {/* Initialize Header Website */}
          <HeaderComponent />
          {/* End Initialize Header Website */}
          {/* Initialize Main Website */}
          <main
            className={`${styles.mainWrapper} w-full h-full min-h-full bg-neutral-000 flex items-center flex-col mt-44!`}
          >
            <Outlet />
          </main>
          {/* End Initialize Main Website */}
        </div>
        {/* End Initialize wrapper Website */}
      </div>
      {/* End Initialize main-container Website */}
    </>
  );
};

export default RootLayout;
