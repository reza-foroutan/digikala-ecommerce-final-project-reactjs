import { Link } from "react-router-dom";

const HeaderMiddleLoginComponent = () => {
  return (
    <>
      <div className="header-middle-login-box w-[135px] h-10 flex justify-center items-center">
        <Link
          to="./users/login/?backUrl=/"
          className="login-box-link font-IRANYekanXFaNum font-black"
        >
          <div className="login-box-link-wrapper flex justify-center">
            <div className="login-box-link-svg flex ml-2">
              <svg
                className="w-6 h-6 fill-icon-high-emphasis"
                id="registerationSignIn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            ورود | ثبت&zwnj;نام
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeaderMiddleLoginComponent;
