import HeaderMiddleLogoBox from "./HeaderMiddleLogoBox/HeaderMiddleLogBox";
import HeaderMiddleSearchBox from "./HeaderMiddleSearchBox/HeaderMiddleSearchBox";

const HeaderMiddleLogoSearchBoxComponent = () => {
  return (
    <>
      <section className={`flex flex-1 items-center grow`}>
        <HeaderMiddleLogoBox />
        <HeaderMiddleSearchBox />
      </section>
    </>
  );
};

export default HeaderMiddleLogoSearchBoxComponent;
