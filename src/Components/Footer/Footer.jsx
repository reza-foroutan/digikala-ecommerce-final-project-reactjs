import FooterFirstRowComponent from "./FooterFirstRow/FooterFirstRow";
import FooterFourthRowComponent from "./FooterFourthRow/FooterFourthRow";
import FooterSecondRowComponent from "./FooterSecondRow/FooterSecondRow";
import FooterThirdRowComponent from "./FooterThirdRow/FooterThirdRow";

const FooterComponent = () => {
  return (
    <>
      <div className="w-full mt-12 pt-8 box-border bg-neutral-000 border-t border-neutral-100">
        <div className="footer-wrapper px-5 box-border">
          <FooterFirstRowComponent />
          <FooterSecondRowComponent />
          <FooterThirdRowComponent />
          <FooterFourthRowComponent />
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
