// src/components/HeaderNavigationCategories/HeaderNavigationShop/HeaderNavigationShop.jsx
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch"; // مسیر ایمپورت هوک خود را بررسی کنید

const HeaderNavigationShop = () => {
  // دریافت داده‌ها از db.json با استفاده از هوک useFetch
  const {
    data: menuItems,
    loading,
    error,
  } = useFetch("/headerNavigationShopItems");

  // مدیریت حالت لودینگ (می‌توانید اسکلتون لودر قرار دهید)
  if (loading)
    return (
      <div className="w-[593px] h-10 flex items-center pr-4 text-xs text-gray-400">
        در حال بارگذاری...
      </div>
    );

  // مدیریت خطا
  if (error) return null;

  return (
    <div className="header-navigation-shop w-[593px] h-10 relative flex justify-start items-center before:w-[1px] before:bg-neutral-200 before:top-[10px] before:absolute before:right-0 before:h-5 pr-4">
      {/* بررسی اینکه menuItems وجود داشته باشد و آرایه باشد */}
      {menuItems &&
        menuItems.map((item) => (
          <div
            key={item.id}
            className="nav-item w-fit px-3 box-border h-full flex justify-center items-center"
          >
            <Link
              to={item.link}
              className="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer hover:text-red-600 transition-colors"
            >
              <div className="nav-item-svg ml-1">
                <svg className="w-[18px] h-[18px] fill-icon-high-emphasis align-middle text-gray-500">
                  {/* استفاده از نام آیکون دریافتی از دیتابیس */}
                  <use href={item.icon}></use>
                </svg>
              </div>
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HeaderNavigationShop;
