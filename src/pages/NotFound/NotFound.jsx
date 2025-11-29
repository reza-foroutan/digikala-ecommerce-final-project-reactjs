import { Link } from "react-router-dom";
import ImagePngNotFound from "../../assets/images/png/page-not-found.png";
import ImageWebNotFound from "../../assets/images/png/page-not-found.webp";
const NotFound = () => {
  return (
    <>
      <div className="grow bg-neutral-000 flex flex-col w-full items-center shrink-0">
        <div className="grow bg-neutral-000 flex flex-col w-full items-center container-xl-w px-6 pt-6 box-border">
          <div className="flex flex-col justify-center items-center px-5 box-border">
            <h2 className="text-h4 text-neutral-800 text-center font-IRANYekanXFaNum font-bold leading-6">
              صفحه‌ای که دنبال آن بودید پیدا نشد!
            </h2>
            <Link
              to="/"
              className="inline-flex items-center cursor-pointer  text-button-secondary font-IRANYekanXFaNum mt-4"
            >
              <span className="text-button-secondary">صفحه اصلی</span>
            </Link>
            <div className="mt-8 flex justify-center items-center">
              <div className="max-w-full w-[571px] h-64 leading-0">
                <picture>
                  <source type="image/webp" srcSet={ImageWebNotFound} />
                  <source type="image/jpeg" srcSet={ImagePngNotFound} />
                  <img
                    src={ImageWebNotFound}
                    alt="error 404"
                    className="w-[571px] h-64 object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
