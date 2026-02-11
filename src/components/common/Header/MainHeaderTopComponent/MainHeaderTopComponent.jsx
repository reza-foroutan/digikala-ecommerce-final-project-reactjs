import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch"; // هوک خودمان را صدا می‌زنیم
import styles from "./styles/styleMainHeaderTopComponent.module.css";

const MainHeaderTopComponent = () => {
  // درخواست به اندپوینت /topBanner که در db.json ساختیم
  const { data: banner, loading, error } = useFetch("/topBanner");

  // اگر در حال لود است، یا ارور داریم، یا بنر خالی است، این سکشن را نشان نده
  // (این روش حرفه‌ای است تا جای خالی در بالای سایت نماند)
  if (loading || error || !banner) {
    // return null;
    // یا می‌توانید یک Skeleton با ارتفاع ثابت برگردانید:
    return <div className="w-full h-15 bg-gray-200 animate-pulse"></div>;
  }

  return (
    <section className={`${styles.mainHeaderTop} w-full h-15`}>
      {/* لینک داینامیک از دیتابیس */}
      <Link to={banner.link || "/"} className="block w-full z-4">
        <div
          className="w-full h-15 md:h-15"
          style={{
            backgroundColor: banner.backgroundColor || "rgba(0,0,0,0.04)",
          }}
        >
          <div className="h-15 leading-0">
            <picture>
              {/* فرمت WebP برای بهینه‌سازی */}
              {banner.imageWebp && (
                <source type="image/webp" srcSet={banner.imageWebp} />
              )}
              {/* فرمت پیش‌فرض */}
              <source type="image/jpeg" srcSet={banner.image} />

              <img
                className="w-full inline-block h-15 object-cover"
                src={banner.image}
                alt={banner.alt || "بنر تبلیغاتی"}
                title={banner.alt}
                loading="eager" // چون بالای صفحه است، سریع لود شود
              />
            </picture>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default MainHeaderTopComponent;
