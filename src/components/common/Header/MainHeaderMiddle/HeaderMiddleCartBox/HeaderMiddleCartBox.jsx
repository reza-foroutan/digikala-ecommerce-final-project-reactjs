import { Link } from "react-router-dom";
import CartIcon from "@/components/icons/CartIcon"; // مسیر را چک کنید

const HeaderMiddleCartBox = () => {
  return (
    <div className="header-middle-cart-box w-10 h-10 flex justify-center items-center">
      <Link
        to="/checkout/cart/" // استفاده از to و مسیر مطلق (بدون نقطه در اول)
        className="cart-box-link w-10 h-10 flex justify-center items-center group relative" // group برای هاور اضافه شد
      >
        <div className="cart-box-link-box flex justify-center mt-3 items-center">
          {/* استفاده از کامپوننت آیکون جدید */}
          <CartIcon className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />

          {/* (اختیاری) اگر بخواهید شمارنده تعداد کالا را اضافه کنید، اینجا جای مناسبی است */}
          {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span> */}
        </div>
      </Link>
    </div>
  );
};

export default HeaderMiddleCartBox;
