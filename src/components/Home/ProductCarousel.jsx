// src/components/Home/ProductCarousel.jsx
import BaseSlider from "../common/BaseSlider";
import { Link } from "react-router-dom";

const ProductCarousel = ({ products }) => {
  // محصولات به عنوان props می‌آیند

  // کانفیگ اختصاصی برای لیست محصولات
  const productSliderSettings = {
    pagination: false, // نقطه‌های پایین لازم نیست
    navigation: true,
    autoplay: false,
    spaceBetween: 15,
    // تنظیمات رسپانسیو (Breakpoints)
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 }, // موبایل
      640: { slidesPerView: 3, spaceBetween: 15 }, // تبلت
      1024: { slidesPerView: 5, spaceBetween: 20 }, // دسکتاپ
      1280: { slidesPerView: 6, spaceBetween: 20 }, // مانیتور بزرگ
    },
  };

  return (
    <div className="py-4 bg-white border rounded-lg">
      <h3 className="pr-4 font-bold mb-4">پیشنادهای شگفت‌انگیز</h3>

      <BaseSlider
        slides={products}
        carouselConfig={productSliderSettings}
        className="px-4"
        // رندر پراپ: ظاهر کارت محصول
        renderSlide={(product) => (
          <Link
            to={`/product/${product.id}`}
            className="block p-2 border hover:shadow-md transition-shadow rounded-lg bg-white h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-2"
            />
            <p className="text-xs font-bold text-gray-700 line-clamp-2 h-10 leading-5">
              {product.name}
            </p>
            <div className="flex justify-between items-end mt-2">
              <span className="text-red-500 font-bold">
                {product.price.toLocaleString()} تومان
              </span>
            </div>
          </Link>
        )}
      />
    </div>
  );
};

export default ProductCarousel;
