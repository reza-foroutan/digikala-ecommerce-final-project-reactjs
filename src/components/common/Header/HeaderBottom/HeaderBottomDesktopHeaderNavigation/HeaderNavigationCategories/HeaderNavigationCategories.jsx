// src/components/HeaderNavigationCategories/HeaderNavigationCategories.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch"; // مسیر هوک خود را چک کنید
import styles from "./styles/styleHeaderNavigationCategories.module.css";

const HeaderNavigationCategories = () => {
  // 1. دریافت داده‌ها
  const { data: categories, loading } = useFetch("/headerCategories");

  // 2. استیت برای مدیریت دسته فعال (برای نمایش محتوای مربوطه در سمت چپ)
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  // وقتی داده‌ها لود شدند، اولین دسته را به عنوان پیش‌فرض انتخاب کن
  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveCategoryId(categories[0].id);
    }
  }, [categories]);

  // هندلر برای تغییر دسته فعال هنگام هاور
  const handleMouseEnter = (id) => {
    setActiveCategoryId(id);
  };

  // پیدا کردن دیتای دسته فعال برای نمایش در سمت چپ
  const activeCategoryData = categories?.find((c) => c.id === activeCategoryId);

  return (
    <div
      className={`${styles.HeaderNavigationCategories} w-[143px] h-10 flex relative`}
    >
      {/* --- دکمه اصلی منو --- */}
      <div className="nav-item w-full h-full flex items-center group relative cursor-pointer">
        <span className="header-main-menu w-full text-[14px] font-IRANYekanXFaNum leading-10 whitespace-nowrap flex items-center text-neutral-700 font-bold">
          <div className="nav-item-svg ml-1">
            <svg className="w-5 h-5 align-middle fill-icon-high-emphasis">
              <use href="#hamburgerMenu"></use>
            </svg>
          </div>
          دسته‌بندی کالاها
        </span>

        {/* --- شروع مگا منو (Dropdown) --- */}
        {/* این دیو فقط زمانی که روی "دسته‌بندی کالاها" هاور شود نمایش داده می‌شود */}
        {!loading && categories && (
          <div className="absolute top-full right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[800px] h-[400px] bg-white shadow-xl rounded-b-lg border-t border-gray-100 flex">
            {/* 1. سایدبار سمت راست (لیست دسته‌های اصلی) */}
            <div className="w-[200px] h-full bg-gray-50 overflow-y-auto border-l border-gray-200 py-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  className={`flex items-center px-4 py-3 cursor-pointer transition-colors text-sm font-IRANYekanXFaNum font-medium 
                    ${
                      activeCategoryId === category.id
                        ? "bg-white text-red-600 border-r-2 border-red-600" // استایل آیتم فعال
                        : "text-gray-600 hover:bg-gray-100 text-neutral-600"
                    }`} // استایل آیتم غیرفعال
                >
                  {/* آیکون دسته */}
                  {category.icon && (
                    <svg className="w-5 h-5 ml-2 fill-current">
                      <use href={category.icon}></use>
                    </svg>
                  )}
                  <span>{category.title}</span>
                </div>
              ))}
            </div>

            {/* 2. محتوای سمت چپ (زیرمجموعه‌ها) */}
            <div className="flex-1 h-full overflow-y-auto p-6 bg-white">
              {/* لینک "همه کالاهای این دسته" در بالا */}
              {activeCategoryData && (
                <div className="mb-6 flex items-center">
                  <Link
                    to={activeCategoryData.link}
                    className="text-sm font-bold text-gray-800 flex items-center hover:text-red-600 transition-colors"
                  >
                    همه کالاهای {activeCategoryData.title}
                    <svg className="w-3 h-3 mr-2 -rotate-90 fill-current">
                      <use href="#chevronLeft"></use>
                    </svg>
                  </Link>
                </div>
              )}

              {/* لیست زیرمجموعه‌ها به صورت گرید */}
              <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                {activeCategoryData?.children?.map((subGroup) => (
                  <div key={subGroup.id} className="flex flex-col">
                    {/* عنوان زیرگروه (با خط عمودی قرمز مشابه دیجی‌کالا) */}
                    <div className="flex items-center mb-2 border-r-2 border-red-500 pr-2">
                      <span className="text-sm font-bold text-gray-700">
                        {subGroup.title}
                      </span>
                    </div>

                    {/* لینک‌های داخلی */}
                    <ul className="space-y-2 pr-3">
                      {subGroup.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="text-xs text-gray-500 hover:text-red-600 transition-colors font-IRANYekanXFaNum block py-0.5"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* --- پایان مگا منو --- */}
      </div>
    </div>
  );
};

export default HeaderNavigationCategories;
