import { Link } from "react-router-dom";

const HeaderTopComponent = () => {
  return (
    <>
      <section className="main-header-top w-full h-[60px]">
        <Link to="" target="_blank" className="block w-full z-4">
          <div className="w-full h-[35px] md:h-[60px] bg-[rgba(0,0,0,0.04)]">
            <div className="h-[60px] leading-0">
              <picture>
                <source type="image/webp" srcset="" />
                <source type="image/jpeg" srcset="" />
                <img
                  class="w-full inline-block h-[60px] object-cover"
                  src=""
                  alt=""
                  title=""
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
