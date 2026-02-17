import { Outlet } from "react-router-dom";
import HeaderComponents from "../../components/common/Header/Header";

const RootLayout = () => {
  return (
    <>
      <div className={`w-full h-full min-h-full relative font-IRANYekanXFaNum`}>
        <div
          className={`w-full h-full flex flex-col bg-neutral-000 items-center`}
        >
          <HeaderComponents />
          <main className="w-full grow bg-neutral-000 flex flex-col items-center shrink-0">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
