import { NavLink } from "react-router-dom";
import styles from "./styles/stylesNotFound.module.css";
import IconChevronLeft from "../../components/icons/IconChevronLeft";

const imageNotFoundWebp =
  "https://nexuhaven-statics-public.nexuhaven.com/digikala-ecommerce-final-project-reactjs/assets/images/png/page-not-found.webp";
const imageNotFoundPng =
  "https://nexuhaven-statics-public.nexuhaven.com/digikala-ecommerce-final-project-reactjs/assets/images/png/page-not-found.png";

const NotFound = () => {
  return (
    <>
      <div
        className={`grow bg-neutral-000 flex flex-col w-full items-center container-xl-w px-6 pt-6 box-border `}
      >
        <div
          className={`flex flex-col justify-center items-center px-5 box-border`}
        >
          <h2 className={`text-h4 text-neutral-800 text-center`}>
            صفحه‌ای که دنبال آن بودید پیدا نشد!
          </h2>
          <NavLink
            to={"/"}
            className={`${styles.AnchorSecondary || "text-cyan-500"}  inline-flex items-center cursor-pointer text-button-2 font-medium mt-4`}
          >
            <span>صفحه اصلی</span>
            <div className={`flex`} aria-hidden="false">
              <IconChevronLeft className="w-4.5 h-4.5 fill-(--color-icon-secondary)] cursor-pointer" />
            </div>
          </NavLink>
          <div className="mt-8 flex justify-center items-center">
            <div
              className="max-w-full w-142.75 h-64 leading-0"
              aria-hidden="false"
              aria-label="error 404"
            >
              <picture>
                <source type="image/webp" srcSet={imageNotFoundWebp}></source>
                <source type="image/jpeg" srcSet={imageNotFoundPng}></source>
                <img
                  className="w-full inline-block object-cover"
                  srcSet={imageNotFoundWebp}
                  alt="error 404"
                  width={571}
                  height={256}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
