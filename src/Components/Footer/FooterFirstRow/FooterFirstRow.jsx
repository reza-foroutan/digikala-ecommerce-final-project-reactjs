import FooterRowFirstGoToTopComponent from "./FooterRowFirstGoToTop/FooterRowFirstGoToTop";
import FooterRowFirstLogoComponent from "./FooterRowFirstLogo/FooterRowFirstLogo";

const FooterFirstRowComponent = () => {
  return (
    <>
      <section class="footer-row-first w-full h-10 flex items-center justify-between select-auto">
        <FooterRowFirstLogoComponent />
        <FooterRowFirstGoToTopComponent />
      </section>
    </>
  );
};

export default FooterFirstRowComponent;
