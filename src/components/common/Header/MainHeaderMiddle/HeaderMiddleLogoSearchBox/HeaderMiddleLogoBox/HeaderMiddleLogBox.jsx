import useFetch from "@/hooks/useFetch";
import { Link } from "react-router-dom";

const HeaderMiddleLogoBox = () => {
  // درخواست به اندپوینت /topBanner که در db.json ساختیم
  const { data: logo, loading, error } = useFetch("/logo");

  // اگر در حال لود است، یا ارور داریم، یا بنر خالی است، این سکشن را نشان نده
  // (این روش حرفه‌ای است تا جای خالی در بالای سایت نماند)
  if (loading || error || !logo) {
    // return null;
    // یا می‌توانید یک Skeleton با ارتفاع ثابت برگردانید:
    return <div className="w-full h-15 bg-gray-200 animate-pulse"></div>;
  }
  return (
    <>
      <Link to={logo.slug || "/"} class="ml-5 shrink-0">
        <div class="w-[195px] h-[30px] leading-0">
          <img
            className="w-[195px] h-[30px] leading-0 object-cover inline-block"
            alt={logo.alt || "لوگوی دیجیکالا"}
            src={logo.image}
            title={logo.alt}
            loading="eager" // چون بالای صفحه است، سریع لود شود
          />
        </div>
      </Link>
    </>
  );
};

export default HeaderMiddleLogoBox;
