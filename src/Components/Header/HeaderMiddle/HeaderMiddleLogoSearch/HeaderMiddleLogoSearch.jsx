import HeaderMiddleLogoBoxComponent from "./HeaderMiddleLogoBox/HeaderMiddleLogoBox";
import HeaderMiddleSearchBoxComponent from "./HeaderMiddleSearchBox/HeaderMiddleSearchBox";

const HeaderMiddleLogoSearchComponent = () => {
  return (
    <>
      <section class="flex flex-1 items-center grow">
        {/* Initialize header middle log box Website */}
        <HeaderMiddleLogoBoxComponent />
        {/* End Initialize header middle log box  Website  */}
        {/* Initialize header middle search box Website */}
        <HeaderMiddleSearchBoxComponent />
        {/* End Initialize header middle search box Website  */}
      </section>
    </>
  );
};

export default HeaderMiddleLogoSearchComponent;
