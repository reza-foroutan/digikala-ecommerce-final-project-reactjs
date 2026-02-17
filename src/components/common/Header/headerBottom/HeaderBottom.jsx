const HeaderBottomComponent = () => {
  return (
    <>
      <div className="main-header-bottom w-full h-11 min-h-9 bg-neutral-000  flex justify-between items-center flex-wrap relative ">
        <nav className="main-header-bottom-nav-location w-full h-11 min-h-9 !px-4 box-border flex justify-between items-center grow mx-auto relative">
          {/* Initialize desktop header navigation Website */}
          <section className="main-header-bottom-desktop-header-navigation w-5/6 h-10 flex relative">
            <div className="header-navigation w-full h-10 flex relative">
              {/* <!-- Initialize desktop header navigation Categories Website --> */}
              <div class="header-navigation-categories w-[143px] h-10 flex relative">
                <div class="nav-item w-full h-full flex items-center group relative">
                  <span class="header-main-menu w-full text-[14px] font-IRANYekanXFaNum leading-10 whitespace-nowrap flex items-center text-neutral-700">
                    <div class="nav-item-svg ml-1">
                      <svg class="w-5 h-5 align-middle fill-icon-high-emphasis">
                        <use xlink:href="#hamburgerMenu"></use>
                      </svg>
                    </div>
                    دسته‌بندی کالاها
                  </span>
                  {/* <!-- Initialize Sub Menu Website --> */}
                  <div class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 w-[330px]">
                    <div class="py-2 box-border">
                      {/* <!-- sub item 01 --> */}
                      <div class="h-[42px]">
                        <a
                          href="/"
                          class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                        >
                          <span> هولدر و نگهدارنده </span>
                        </a>
                      </div>
                      {/* <!-- end sub item 01 --> */}
                      {/* <!-- sub item 02 --> */}
                      <div class="group/submenu relative h-[42px] flex">
                        <a
                          href="/"
                          class="block flex justify-between w-full px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                        >
                          <span>تجهیزات ذخیره سازی</span>
                          <div class="flex">
                            <svg class="w-6 h-6 fill-icon-high-emphasis">
                              <use xlink:href="#chevronLeft"></use>
                            </svg>
                          </div>
                        </a>

                        <div class="absolute right-full top-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all">
                          <div class="py-2 box-border">
                            {/* <!-- sub item 01 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> فلش مموری </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 01 --> */}
                            {/* <!-- sub item 02 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> کارت حافظه </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 02 --> */}
                            {/* <!-- sub item 03 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هارد اکسترنال </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 03 --> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- end sub item 02 --> */}

                      {/* <!-- sub item 03 --> */}
                      <div class="h-[42px]">
                        <a
                          href="/"
                          class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                        >
                          <span>اسپیکر</span>
                        </a>
                      </div>
                      {/* <!-- end sub item 03 --> */}

                      {/* <!-- sub item 04 --> */}
                      <div class="h-[42px]">
                        <a
                          href="/"
                          class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                        >
                          <span> ماوس و کیبورد و پدموس </span>
                        </a>
                      </div>
                      {/* <!-- end sub item 04 --> */}
                      {/* <!-- sub item 05 --> */}
                      <div class="group/submenu relative h-[42px]">
                        <a
                          href="/"
                          class="block flex justify-between w-full px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                        >
                          <span> هندزفری و هدست، میکروفون </span>
                          <div class="flex">
                            <svg class="w-6 h-6 fill-icon-high-emphasis">
                              <use xlink:href="#chevronLeft"></use>
                            </svg>
                          </div>
                        </a>

                        <div class="absolute right-full top-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all">
                          <div class="py-2 box-border">
                            {/* <!-- sub item 01 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> میکروفون </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 01 --> */}
                            {/* <!-- sub item 02 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هندزفری سیم دار </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 02 --> */}
                            {/* <!-- sub item 03 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هدست سیم دار </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 03 --> */}
                            {/* <!-- sub item 04 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هدست سیم دار </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 04 --> */}
                            {/* <!-- sub item 05 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هدفون بلوتوث </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 05 --> */}
                            {/* <!-- sub item 06 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هندزفری بلوتوث دو گوش </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 06 --> */}
                            {/* <!-- sub item 07 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-Shabnam"
                              >
                                <span> هندزفری بلوتوث دورگردنی </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 07 --> */}
                            {/* <!-- sub item 08 --> */}
                            <div class="h-[42px]">
                              <a
                                href="/"
                                class="block px-4 py-2 box-border text-sm text-gray-700 hover:bg-[#0000000a] hover:text-[#0a5abd] font-IRANYekanXFaNum"
                              >
                                <span> هندزفری بلوتوث تک گوش </span>
                              </a>
                            </div>
                            {/* <!-- end sub item 08 --> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- end sub item 05 --> */}
                    </div>
                  </div>
                  {/* <!-- End Initialize Sub Menu Website --> */}
                </div>
              </div>
              {/* <!-- End Initialize desktop header navigation Categories Website --> */}
              {/* <!-- Initialize desktop header navigation shop Website --> */}
              <div class="header-navigation-shop w-[593px] h-10 relative flex justify-start items-center before:w-[1px] before:bg-neutral-200 before:top-[10px] before:absolute before:right-4 before:h-5">
                {/* <!-- item 01 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex justify-center items-center">
                  <a
                    href="/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    <div class="nav-item-svg ml-1">
                      <svg class="w-[18px] h-[18px] fill-icon-high-emphasis align-middle">
                        <use xlink:href="#amazing"></use>
                      </svg>
                    </div>
                    شگفت‌انگیزها
                  </a>
                </div>
                {/* <!-- end item 01 --> */}
                {/* <!-- item 02 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex justify-center items-center">
                  <a
                    href="./incredible-offers/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    <div class="nav-item-svg ml-1">
                      <svg class="w-[18px] h-[18px] fill-icon-high-emphasis align-middle">
                        <use xlink:href="#amazing"></use>
                      </svg>
                    </div>
                    شگفت‌انگیزها
                  </a>
                </div>
                {/* <!-- end item 02 --> */}
                {/* <!-- item 03 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex justify-center items-center">
                  <a
                    href="./incredible-offers/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    <div class="nav-item-svg ml-1">
                      <svg class="w-[18px] h-[18px] fill-icon-high-emphasis align-middle">
                        <use xlink:href="#amazing"></use>
                      </svg>
                    </div>
                    شگفت‌انگیزها
                  </a>
                </div>
                {/* <!-- end item 03 --> */}
                {/* <!-- item 04 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex justify-center items-center">
                  <a
                    href="./incredible-offers/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    <div class="nav-item-svg ml-1">
                      <svg class="w-[18px] h-[18px] fill-icon-high-emphasis align-middle">
                        <use xlink:href="#amazing"></use>
                      </svg>
                    </div>
                    شگفت‌انگیزها
                  </a>
                </div>
                {/* <!-- end item 04 --> */}
                {/* <!-- item 05 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex justify-center items-center">
                  <a
                    href="./incredible-offers/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    <div class="nav-item-svg ml-1">
                      <svg class="w-[18px] h-[18px] fill-icon-high-emphasis align-middle">
                        <use xlink:href="#amazing"></use>
                      </svg>
                    </div>
                    شگفت‌انگیزها
                  </a>
                </div>
                {/* <!-- end item 05 --> */}
              </div>
              {/* <!-- End Initialize desktop header navigation shop Website --> */}
              {/* <!-- Initialize desktop header navigation site Website --> */}
              <div class="header-navigation-site w-[593px] h-10 relative flex justify-start items-center">
                {/* <!-- item 01 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex items-center">
                  <a
                    href="./incredible-offers/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    سوالی دارید؟
                  </a>
                </div>
                {/* <!-- end item 01 --> */}
                {/* <!-- item 02 --> */}
                <div class="nav-item w-fit px-3 box-border h-full flex items-center">
                  <a
                    href="./fresh/"
                    target="_self"
                    class="header-main-menu text-[12px] font-IRANYekanXFaNum font-normal text-neutral-600 whitespace-nowrap flex items-center cursor-pointer"
                  >
                    در Document بفروشید!
                  </a>
                </div>
                {/* <!-- end item 02 --> */}
              </div>
              {/* <!-- End Initialize desktop header navigation site Website --> */}
            </div>
          </section>
          {/* End Initialize desktop header navigation Website */}
          {/* <!-- Initialize desktop header location Website --> */}
          <section class="main-header-bottom-desktop-header-location w-1/6 h-10 flex justify-end relative">
            <div class="w-full h-10 flex justify-center items-center relative">
              <label
                for="show"
                class="header-location w-[172px] py-1 px-3 box-border rounded-full gap-2 flex jus cursor-pointer items-center relative bg-hint-text-caution-rgb"
              >
                <div class="header-location-svg">
                  <svg class="w-[20px] h-[20px] text-[20px] fill-hint-text-caution">
                    <use xlink:href="#pin"></use>
                  </svg>
                </div>
                <p class="header-location-text text-[12px] font-bold text-hint-text-caution font-IRANYekanXFaNum">
                  شهر خود را انتخاب کنید
                </p>
              </label>
            </div>
          </section>
          {/* <!-- End Initialize desktop header location Website --> */}
        </nav>
      </div>
    </>
  );
};

export default HeaderBottomComponent;
