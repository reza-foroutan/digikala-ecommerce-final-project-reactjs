import { Link } from "react-router-dom";

const FooterRowFirstGoToTopComponent = () => {
  return (
    <>
      <div className="footer-row-first-go-to-top">
        <Link
          to=""
          className="footer-row-first-go-to-top-link border border-neutral-100 flex bg-transparent text-button-black px-4 py-2 box-border text-[12px] font-bold rounded-lg items-center justify-center cursor-pointer relative h-10 w-[138px]"
        >
          <span className="footer-row-first-go-to-top-link-text ml-2 text-neutral-400">
            بازگشت به بالا
          </span>
          <div className="footer-row-first-go-to-top-link-svg">
            <svg
              className="w-6 h-6 align-middle fill-icon-low-emphasis"
              id="expandLess"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FooterRowFirstGoToTopComponent;
