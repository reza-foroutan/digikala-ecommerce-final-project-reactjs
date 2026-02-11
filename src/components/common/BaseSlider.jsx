// src/components/common/BaseSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
// ماژول‌های مورد نیاز (Navigation, Pagination, Autoplay)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استایل‌های پایه Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./BaseSlider.css"; // فایل استایل سفارشی برای شخصی‌سازی دکمه‌ها

const BaseSlider = ({
  slides, // آرایه‌ای از داده‌ها
  renderSlide, // تابعی که ظاهر هر اسلاید را می‌سازد (Render Prop)
  carouselConfig, // تنظیمات خاص اسلایدر (مثل تعداد نمایش در هر صفحه)
  className = "", // کلاس‌های اضافی برای کانتینر اصلی
}) => {
  // تنظیمات پیش‌فرض (که اگر چیزی پاس ندادید اعمال شود)
  const defaultConfig = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true, // فلش‌های چپ و راست
    pagination: { clickable: true }, // نقطه‌های پایین
    autoplay: false,
    loop: false,
    ...carouselConfig, // تنظیمات کاربر، پیش‌فرض‌ها را بازنویسی می‌کند
  };

  return (
    <div className={`base-slider-wrapper relative group ${className}`}>
      <Swiper {...defaultConfig} className="w-full h-full rounded-lg">
        {slides.map((item, index) => (
          <SwiperSlide key={item.id || index} className="h-full">
            {/* اینجا مشخص می‌کنیم هر آیتم چه شکلی باشد */}
            {renderSlide(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BaseSlider;
