import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch/UseFetch";
import styles from "./styles/styleMainHeaderTopComponent.module.css";

import placeholderImage from "../../../../assets/images/svg/image-placeholder.svg";

const MainHeaderTopComponent = () => {
  const DB_URL =
    "https://reza-foroutan.github.io/json-digikala-ecommerce/db.json";

  const { data, loading, error } = useFetch(DB_URL);
  const [imgSrc, setImgSrc] = useState(null);

  const banner = data?.bannerHeaderTopAd || data?.BannerHeaderTopAd || {};

  useEffect(() => {
    if (banner?.ImageBannerAd) {
      setImgSrc(banner.ImageBannerAd);
    }
  }, [data]);

  const handleError = (e) => {
    e.currentTarget.onerror = null;
    if (imgSrc !== placeholderImage) {
      setImgSrc(placeholderImage);
    }
  };

  return (
    <section className={`w-full h-16 ${styles.mainHeaderTop}`}>
      {loading && (
        <div className="w-full h-full bg-gray-100 animate-pulse"></div>
      )}

      {!loading && (
        <NavLink
          to={banner.link || "#"}
          className="block w-full h-full z-10 relative"
          onClick={(e) => !banner.link && e.preventDefault()}
        >
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              backgroundColor: banner.backgroundColor || "#f0f0f1",
            }}
          >
            <div className="h-full leading-none flex items-center justify-center">
              {error || imgSrc === placeholderImage || !imgSrc ? (
                <img
                  src={placeholderImage}
                  alt="placeholder"
                  className="h-full object-contain p-2 opacity-50"
                />
              ) : (
                <picture className="w-full h-full">
                  {banner.imageWebp && (
                    <source type="image/webp" srcSet={banner.imageWebp} />
                  )}
                  <img
                    className="w-full h-full object-cover"
                    src={imgSrc}
                    alt={banner.imageAlt || "بنر"}
                    loading="eager"
                    onError={handleError}
                  />
                </picture>
              )}
            </div>
          </div>
        </NavLink>
      )}
    </section>
  );
};

export default MainHeaderTopComponent;
