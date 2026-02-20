const HeaderMiddleSearchBoxComponent = () => {
  return (
    <>
      <div className="header-middle-search-box w-[84%] h-11 flex">
        <div className="header-middle-search-box-wrapper w-full h-11 flex justify-start items-center relative">
          <input
            type="search"
            className="w-[600px] h-11 relative flex justify-start !px-4 box-border whitespace-nowrap text-ellipsis text-[12px] font-IRANYekanXFaNum font-normal leading-11 bg-neutral-100 rounded-sm mr-8 transition-all duration-150 ease-in outline-none border-none placeholder:font-IRANYekanXFaNum placeholder:font-medium"
            name="header-middle-search-name"
            id="header-middle-search-id"
            placeholder="جستجو"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderMiddleSearchBoxComponent;
