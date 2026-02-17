import { NavLink } from "react-router-dom";
import styles from "./styles/styleHeaderMiddleLogin.module.css";
import RegistrationSignInIcon from "../../../../icons/RegistrationSignInIcon";
const HeaderMiddleLogin = () => {
  return (
    <>
      <div className="header-middle-login-box w-[135px] !ml-3 !h-[120px] flex justify-center items-center">
        <NavLink
          to=""
          className={`${styles.loginBoxLink} font-IRANYekanXFaNum font-black`}
        >
          <div className="login-box-link-wrapper flex justify-center">
            <div className="login-box-link-svg flex ml-2 gap-x-2">
              <RegistrationSignInIcon className="w-[24px] h-[24px] font-medium fill-icon-high-emphasis" />
              <span> ورود | ثبت&zwnj;نام</span>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default HeaderMiddleLogin;
