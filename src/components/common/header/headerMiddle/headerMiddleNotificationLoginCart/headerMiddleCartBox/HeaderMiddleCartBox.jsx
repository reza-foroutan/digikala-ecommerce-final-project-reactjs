const HeaderMiddleCartBoxComponent = () => {
  return (
    <>
      <div className="header-middle-cart-box w-10 h-10 flex justify-center items-center">
        <a
          href="./checkout/cart/"
          className="cart-box-link w-10 h-10 flex justify-center items-center"
        >
          <div className="cart-box-link-box flex justify-center items-center">
            <svg className="w-[24px] h-[24px] align-middle fill-icon-high-emphasis">
              <use href="#cartOff"></use>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
};

export default HeaderMiddleCartBoxComponent;
