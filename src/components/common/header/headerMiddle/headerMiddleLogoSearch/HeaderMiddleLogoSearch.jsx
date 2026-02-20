import styles from "../styles/HeaderMiddleLogoSearch.module.css";
import HeaderMiddleLogoBoxComponent from "./headerMiddleLogoBox/HeaderMiddleLogoBox";
import HeaderMiddleSearchBoxComponent from "./headerMiddleSearchBox/HeaderMiddleSearchBox";
const HeaderMiddleLogoSearchComponent = () => {
  return (
    <>
      <section
        className={`${styles.headerMiddleLogoSearch} w-full flex flex-1 items-center grow`}
      >
        {/* Initialize header middle logo box Website */}
        <HeaderMiddleLogoBoxComponent />
        {/* End Initialize header middle logo box Website */}
        {/* Initialize header middle search box Website */}
        <HeaderMiddleSearchBoxComponent />
        {/* End Initialize header middle search box Website */}
      </section>
    </>
  );
};

export default HeaderMiddleLogoSearchComponent;
