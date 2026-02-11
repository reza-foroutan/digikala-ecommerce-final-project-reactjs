import { Suspense } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom"; // ۱. ایمپورت‌های روتر اضافه شد
import Boundary from "../../components/common/Boundary/Boundary"; // ۲. ایمپورت کامپوننت باندری (مسیر را چک کنید)

const RootLayout = () => {
  // ۳. تعریف منطق لودینگ
  const navigation = useNavigation();
  const isLoadingPage = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* هدر و ناوبری */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
          <div className="font-bold text-xl ml-4">لوگو</div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            خانه
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            داشبورد
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            پروفایل
          </NavLink>
        </nav>

        {/* لودینگ خطی بالای صفحه */}
        {isLoadingPage && (
          <div className="h-1 w-full bg-blue-100 overflow-hidden">
            <div className="h-full bg-blue-500 w-1/2 animate-pulse"></div>
          </div>
        )}
      </header>

      {/* محتوای اصلی */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 bg-gray-50">
        <Boundary>
          <Suspense
            fallback={
              <div className="p-10 text-center text-gray-400">
                در حال دریافت محتوا...
              </div>
            }
          >
            {/* اینجا جایی است که صفحات Home, Dashboard و... نمایش داده می‌شوند */}
            <Outlet />
          </Suspense>
        </Boundary>
      </main>

      {/* فوتر */}
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        © 2026 کپی‌رایت محفوظ است
      </footer>
    </div>
  );
};

export default RootLayout;
