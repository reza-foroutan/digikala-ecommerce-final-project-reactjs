// src/components/Home/MainHomeSlider.jsx
import React from "react";
import BaseSlider from "@/components/common/BaseSlider";
import useFetch from "@/hooks/useFetch";

const MainHomeSlider = () => {
  // اصلاح مهم: به جای تابع سرویس، آدرس استرینگ را مستقیم وارد کنید
  // چون useFetch شما انتظار آدرس (String) دارد
  const { data: slides, loading, error } = useFetch("/mainSlider");

  const sliderConfig = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
    navigation: true,
  };

  // ۱. حالت لودینگ
  if (loading) {
    return (
      <section className="w-full h-[200px] md:h-[350px] lg:h-[400px] mt-4 bg-gray-100 animate-pulse rounded-lg"></section>
    );
  }

  // ۲. حالت ارور
  if (error) return null;

  // ۳. حالت نمایش
  return (
    <section className="w-full h-[200px] md:h-[350px] lg:h-[400px] mt-4">
      {slides && slides.length > 0 && (
        <BaseSlider
          slides={slides}
          carouselConfig={sliderConfig}
          renderSlide={(item) => (
            <div className="w-full h-full relative group cursor-pointer">
              <img
                src={item.image}
                alt={item.alt || "اسلایدر"}
                className="w-full h-full object-cover object-center rounded-lg"
                onError={(e) => {
                  // اگر عکس پیدا نشد، یک placeholder نشان بده
                  e.target.src =
                    "https://via.placeholder.com/800x400?text=No+Image";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-lg"></div>
            </div>
          )}
        />
      )}
    </section>
  );
};

export default MainHomeSlider;
