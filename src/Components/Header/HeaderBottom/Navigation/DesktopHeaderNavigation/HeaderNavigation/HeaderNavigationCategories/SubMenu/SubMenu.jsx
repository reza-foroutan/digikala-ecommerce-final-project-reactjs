import { Link } from "react-router-dom";

const SubMenuComponent = () => {
  return (
    <>
      <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 w-[330px]">
        <div className="py-2 box-border">
          {/* <!-- sub item 01 --> */}
          <div className="h-[42px]">
            <Link
              to="/"
              className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
            >
              <span> هولدر و نگهدارنده </span>
            </Link>
          </div>
          {/* <!-- end sub item 01 --> */}
          {/* <!-- sub item 02 --> */}
          <div className="group/submenu relative h-[42px] flex">
            <Link
              href="/"
              className="block flex justify-between w-full px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
            >
              <span>تجهیزات ذخیره سازی</span>
              <div className="flex">
                <svg
                  className="w-6 h-6 fill-icon-high-emphasis"
                  id="chevronLeft"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                </svg>
              </div>
            </Link>

            <div className="absolute right-full top-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all">
              <div className="py-2 box-border">
                {/* <!-- sub item 01 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> فلش مموری </span>
                  </Link>
                </div>
                {/* <!-- end sub item 01 --> */}
                {/* <!-- sub item 02 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> کارت حافظه </span>
                  </Link>
                </div>
                {/* <!-- end sub item 02 --> */}
                {/* <!-- sub item 03 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هارد اکسترنال </span>
                  </Link>
                </div>
                {/* <!-- end sub item 03 --> */}
              </div>
            </div>
          </div>
          {/* <!-- end sub item 02 --> */}

          {/* <!-- sub item 03 --> */}
          <div className="h-[42px]">
            <Link
              href="/"
              className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
            >
              <span>اسپیکر</span>
            </Link>
          </div>
          {/* <!-- end sub item 03 --> */}

          {/* <!-- sub item 04 --> */}
          <div className="h-[42px]">
            <Link
              href="/"
              className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
            >
              <span> ماوس و کیبورد و پدموس </span>
            </Link>
          </div>
          {/* <!-- end sub item 04 --> */}
          {/* <!-- sub item 05 --> */}
          <div className="group/submenu relative h-[42px]">
            <Link
              href="/"
              className="block flex justify-between w-full px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
            >
              <span> هندزفری و هدست، میکروفون </span>
              <div className="flex">
                <svg
                  className="w-6 h-6 fill-icon-high-emphasis"
                  id="chevronLeft"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                </svg>
              </div>
            </Link>

            <div className="absolute right-full top-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all">
              <div className="py-2 box-border">
                {/* <!-- sub item 01 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> میکروفون </span>
                  </Link>
                </div>
                {/* <!-- end sub item 01 --> */}
                {/* <!-- sub item 02 --> */}
                <div className="h-[42px]">
                  <Link
                    to="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هندزفری سیم دار </span>
                  </Link>
                </div>
                {/* <!-- end sub item 02 --> */}
                {/* <!-- sub item 03 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هدست سیم دار </span>
                  </Link>
                </div>
                {/* <!-- end sub item 03 --> */}
                {/* <!-- sub item 04 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هدست سیم دار </span>
                  </Link>
                </div>
                {/* <!-- end sub item 04 --> */}
                {/* <!-- sub item 05 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هدفون بلوتوث </span>
                  </Link>
                </div>
                {/* <!-- end sub item 05 --> */}
                {/* <!-- sub item 06 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هندزفری بلوتوث دو گوش </span>
                  </Link>
                </div>
                {/* <!-- end sub item 06 --> */}
                {/* <!-- sub item 07 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هندزفری بلوتوث دورگردنی </span>
                  </Link>
                </div>
                {/* <!-- end sub item 07 --> */}
                {/* <!-- sub item 08 --> */}
                <div className="h-[42px]">
                  <Link
                    href="/"
                    className="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                  >
                    <span> هندزفری بلوتوث تک گوش </span>
                  </Link>
                </div>
                {/* <!-- end sub item 08 --> */}
              </div>
            </div>
          </div>
          {/* <!-- end sub item 05 --> */}
        </div>
      </div>
    </>
  );
};

export default SubMenuComponent;
