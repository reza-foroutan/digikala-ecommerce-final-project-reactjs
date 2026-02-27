import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
