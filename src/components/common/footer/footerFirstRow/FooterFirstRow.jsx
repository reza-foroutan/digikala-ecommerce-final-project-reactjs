import FooterRowFirstLogoComponent from "./footerRowFirstLogo/FooterRowFirstLogo.jsx";
import FooterRowFirstGoToTopComponent from "./footerRowFirstGoToTop/FooterRowFirstGoToTop.jsx";

const FooterFirstRowComponent = () => {
    return (<>
    <section className={`footer-row-first w-full h-10 flex items-center justify-between select-auto`}>
        <FooterRowFirstLogoComponent />
        <FooterRowFirstGoToTopComponent />
    </section>
    </>)
}

export default FooterFirstRowComponent