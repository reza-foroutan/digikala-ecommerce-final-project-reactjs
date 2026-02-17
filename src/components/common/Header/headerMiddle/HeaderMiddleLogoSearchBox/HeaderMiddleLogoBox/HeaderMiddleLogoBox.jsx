import { NavLink } from "react-router-dom";
import useFetch from "../../../../../../Hooks/useFetch/UseFetch";
import placeholderImage from "../../../../../../assets/images/svg/image-placeholder.svg";

const HeaderMiddleLogoBox = () => {
  // آدرس API
  const DB_URL =
    "https://reza-foroutan.github.io/json-digikala-ecommerce/db.json";

  // 1. فراخوانی هوک
  const { data, loading } = useFetch(DB_URL);

  // 2. استخراج اطلاعات لوگو
  // نکته مهم: باید مطمئن شوید در فایل JSON کلیدی به نام 'logo' وجود دارد.
  // اگر نامش چیز دیگری است (مثلا generalInfo.logo) آن را اینجا اصلاح کنید.
  const logoInfo = data?.logo || {};

  // 3. نمایش اسکلتون (Loading Skeleton) برای جلوگیری از پرش صفحه
  if (loading) {
    return (
      <div className="ml-5 w-[195px] h-[30px] bg-gray-100 animate-pulse rounded"></div>
    );
  }

  return (
    <>
      <NavLink to={"/"} className="ml-5 shrink-0">
        <div className="w-[195px] h-[30px] leading-none">
          <img
            className="w-full h-full object-contain inline-block"
            src={logoInfo.url || placeholderImage}
            alt={logoInfo.alt || "لوگوی دیجیکالا"}
            title={logoInfo.alt || "صفحه اصلی دیجیکالا"}
            onError={(e) => {
              e.currentTarget.src = placeholderImage;
              e.currentTarget.onerror = null;
            }}
          />
        </div>
      </NavLink>
    </>
  );
};

export default HeaderMiddleLogoBox;
