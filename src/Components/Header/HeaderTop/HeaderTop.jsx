import { Link } from "react-router-dom";

const HeaderTopComponent = () => {
  return (
    <>
      <section className="main-header-top w-full h-[60px]">
        <Link to="" target="_blank" className="block w-full z-4">
          <div className="w-full h-[35px] md:h-[60px] bg-[rgba(0,0,0,0.04)]">
            <div className="h-[60px] leading-0">
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://nexuhaven-statics-public.nexuhaven.com/digikala-ecommerce-final-project-reactjs/assets/images/header/header-top/adservice-banners/black-friday-tabdeal.gif"
                />
                <source
                  type="image/jpeg"
                  srcSet="https://nexuhaven-statics-public.nexuhaven.com/digikala-ecommerce-final-project-reactjs/assets/images/header/header-top/adservice-banners/black-friday-tabdeal.gif"
                />
                <img
                  className="w-full inline-block h-[60px] object-cover"
                  src="https://nexuhaven-statics-public.nexuhaven.com/digikala-ecommerce-final-project-reactjs/assets/images/header/header-top/adservice-banners/black-friday-tabdeal.gif"
                  alt="گنج قارون💰 بزرگ‌ترین کمپین بلک فرایدی ۱۴۰۴ با صرافی تبدیل و دیجی‌کالا"
                  title="گنج قارون💰 بزرگ‌ترین کمپین بلک فرایدی ۱۴۰۴ با صرافی تبدیل و دیجی‌کالا"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default HeaderTopComponent;
