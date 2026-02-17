import { NavLink } from "react-router-dom";
import useFetch from "../../../../../Hooks/useFetch/UseFetch"; // مسیر ایمپورت را چک کنید
import placeholderImage from "../../../../../assets/images/svg/image-placeholder.svg"; // مسیر ایمپورت را چک کنید

const HeaderMiddleLogo = () => {
  const DB_URL =
    "https://reza-foroutan.github.io/json-digikala-ecommerce/db.json";

  const { data, loading } = useFetch(DB_URL);

  const logoInfo = data?.logo || {};

  if (loading) {
    return (
      <div className="ml-5 w-[195px] h-[30px] bg-gray-100 animate-pulse rounded"></div>
    );
  }

  return (
    <>
      <NavLink to="/" className={`ml-5 shrink-0`}>
        <div className="w-[195px] h-[30px] leading-none">
          <img
            className="w-full h-full object-contain inline-block" 
         
            src={logoInfo.url || placeholderImage}
            alt={logoInfo.alt || "لوگوی دیجیکالا"}
            title={logoInfo.alt || " دیجیکالا"}
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

export default HeaderMiddleLogo;
