import { Link } from "react-router-dom";
import styles from "./styles/styleHeaderMiddleLoginBox.module.css";
// ۱. ایمپورت با نام صحیح (PascalCase)
import RegistrationSignInIcon from "@/components/icons/registerationSignInIcon";

const HeaderMiddleLoginBox = () => {
  return (
    <>
      <div className="header-middle-login-box w-[135px] h-10 flex justify-center items-center">
        {/* ۲. استفاده از to به جای href برای کامپوننت Link */}
        <Link
          to="/users/login/?backUrl=/"
          className={`${styles.loginBoxLink} font-IRANYekanXFaNum font-bold text-sm text-gray-800 flex items-center gap-2 group`}
        >
          {/* ۳. استفاده از کامپوننت با نام صحیح (PascalCase) */}
          <RegistrationSignInIcon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
          <span>ورود | ثبت‌نام</span>
        </Link>
      </div>
    </>
  );
};

export default HeaderMiddleLoginBox;
