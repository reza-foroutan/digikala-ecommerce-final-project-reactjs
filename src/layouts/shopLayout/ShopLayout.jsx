import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/common/header/Header";

const ShopLayout = () => {
  return (
    <>
      <div>
        <div>
          <HeaderComponent />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
