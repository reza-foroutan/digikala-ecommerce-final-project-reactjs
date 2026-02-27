import FooterFirstRowComponent from "./footerFirstRow/FooterFirstRow.jsx";
import FooterSecondRowComponent from "./footerSecondRow/FooterSecondRow.jsx";

const FooterComponent = () => {
    return (<>
        <footer className={`w-full mt-12 px-5! pt-8! box-border bg-neutral-000 border-t border-neutral-100`}>
            <div className={`footer-wrapper px-5! box-border flex items-center justify-center`}>
                {/*Initialize footer first row Website*/}
                    <FooterFirstRowComponent/>
                {/*End Initialize footer first row Website*/}
                {/*Initialize footer second row Website*/}
                    <FooterSecondRowComponent />
                {/*End Initialize footer second row Website*/}
            </div>
        </footer>
    </>)
}

export default FooterComponent