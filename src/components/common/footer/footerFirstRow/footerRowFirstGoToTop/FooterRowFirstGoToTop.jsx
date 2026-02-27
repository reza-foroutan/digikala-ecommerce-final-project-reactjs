import {Link} from "react-router-dom";

const FooterRowFirstGoToTopComponent=()=>{
    return(<>
            <div className={`footer-row-first-go-to-top`}>
                <Link to={""}
                      className={`footer-row-first-go-to-top-link border border-neutral-100 flex bg-transparent text-button-black px-4 py-2 box-border text-[12px] font-bold rounded-[8px] items-center justify-center cursor-pointer relative h-10 w-[138px]`}>
                    <span className="footer-row-first-go-to-top-link-text ml-2 text-neutral-400">بازگشت به بالا</span>
                    <div className="footer-row-first-go-to-top-link-svg">
                        <svg
                            className="w-[24px] h-[24px] align-middle fill-icon-low-emphasis"
                        >
                            <use href="#expandLess"></use>
                        </svg>
                    </div>
                </Link>
            </div>
    </>)
}

export default FooterRowFirstGoToTopComponent