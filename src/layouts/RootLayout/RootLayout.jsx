import { Suspense } from "react";
import Boundary from "../../components/common/Boundary/Boundary"; // ۲. ایمپورت کامپوننت باندری (مسیر را چک کنید)
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/common/Header/Header";

const RootLayout = () => {
  return (
    <>
      {/* Initialize main-container Website */}
      <div className={`main-container w-full h-full min-h-screen relative`}>
        {/* Initialize wrapper Website */}
        <div
          className={`wrapper h-full flex flex-col bg-neutral-000 items-center`}
        >
          {/* Initialize main header Website */}
          <HeaderComponent />
          {/* End Initialize main header Website */}

          {/* محتوای اصلی */}
          <main
            className={`main-wrapper w-full h-full min-h-full bg-neutral-000 flex items-center flex-col mt-42`}
          >
            <Boundary>
              <Suspense
                fallback={
                  <div className="p-10 text-center text-gray-400">
                    در حال دریافت محتوا...
                  </div>
                }
              >
                <Outlet />
              </Suspense>
            </Boundary>
          </main>
        </div>
        {/* Initialize wrapper Website */}
      </div>
      {/* End Initialize main-container Website */}
    </>
  );
};

export default RootLayout;
