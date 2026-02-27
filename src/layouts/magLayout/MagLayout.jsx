import { Outlet } from "react-router-dom";

const MagLayout = () => {
  return (
    <>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MagLayout;
