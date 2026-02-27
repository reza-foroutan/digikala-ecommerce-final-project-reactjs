import { Link } from "react-router-dom";
import logo from "../../../assets/images/brand/full-horizontal.svg";
const LoginPage = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div
          className={`w-1/3 shadow-sm shadow-slate-900 rounded-md p-5! box-border`}
        >
          <div className="w-full flex justify-between items-center">
            <div className="">
              <Link to={"/"}>back</Link>
            </div>
            <div>
              <img src={logo} className="block" alt="" />
            </div>
          </div>
          <div className="contentLogin my-5!">
            <div className="pageTitleLogin">
              <h1 className="text-[1.6rem] font-bold mb-4!">
                ورود یا ثبت‌نام در دیجی‌کالا
              </h1>
              <p>
                <span>لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
              </p>
            </div>
          </div>
          <div className="text-caption terms">
            <p className="text-caption terms">
                ورود شما به معنای پذیرش
              <a href="/page/terms">
                شرایط دیجی&zwnj;کالا
              </a>
              و
              <a href="/page/privacy/">
                قوانین حریم&zwnj;خصوصی
              </a>
              است
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
