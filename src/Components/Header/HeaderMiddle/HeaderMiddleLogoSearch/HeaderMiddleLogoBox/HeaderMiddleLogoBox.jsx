import { Link } from "react-router-dom";

const HeaderMiddleLogoBoxComponent = () => {
  return (
    <>
      <Link to="/" class="ml-5 shrink-0">
        <div class="w-[195px] h-[30px] leading-0">
          <img
            class="w-[195px] h-[30px] leading-0 object-cover inline-block"
            src="https://nexuhaven-statics-public.nexuhaven.com/digikala-ecommerce-final-project-reactjs/assets/images/brand/full-horizontal.svg"
            alt="لوگوی دیجیکالا"
            title=""
          />
        </div>
      </Link>
    </>
  );
};

export default HeaderMiddleLogoBoxComponent;
