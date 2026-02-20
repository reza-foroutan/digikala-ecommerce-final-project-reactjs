import { NavLink } from "react-router-dom";
import styles from "./styles/styleHeaderTop.module.css";

const HeaderTopComponent = () => {
  return (
    <>
      <section className={`${styles.mainHeaderTop}`}>
        <NavLink to={"/"} className={`block w-full z-4`}>
          <div className={`w-full h-[60px] md:h-[60px] bg-[rgba(0,0,0,0.04)]`}>
            <div className={`w-full h-[60px] leading-none`}>
              <picture className={`w-full h-[60px] block mx-auto`}>
                <source type="image/webp" srcSet="" />
                <source type="image/jpeg" srcSet="" />
                <img
                  srcSet="/assets/images/logo.png"
                  alt="logo"
                  title=""
                  className={`w-full inline-block h-[60px] object-cover`}
                />
              </picture>
            </div>
          </div>
        </NavLink>
      </section>
    </>
  );
};

export default HeaderTopComponent;
