import { NavLink } from "react-router-dom";
import styles from "./styles/styleHeaderMiddleLogin.module.css";

const HeaderMiddleLoginComponent = () => {
  return (
    <>
      <div
        className={`${styles.headerMiddleLoginBox} w-[135px] h-10 flex justify-center items-center mx-4!`}
      >
        <NavLink
          to={"/auth/login"}
          className={`${styles.loginBoxLink} font-IRANYekanXFaNum font-black`}
        >
          <div className={`${styles.loginBoxLinkWrapper} flex justify-center`}>
            <div className="login-box-link-svg flex ml-2 gap-x-2">
              <svg
                width="24"
                height="24"
                style={{
                  fill: "var(--color-icon-high-emphasis)",
                }}
              >
                <use href="#registerationSignIn"></use>
              </svg>
              ورود | ثبت&zwnj;نام
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default HeaderMiddleLoginComponent;
