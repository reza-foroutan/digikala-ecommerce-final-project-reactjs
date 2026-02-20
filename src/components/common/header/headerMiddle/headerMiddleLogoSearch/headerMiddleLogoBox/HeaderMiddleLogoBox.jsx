import { NavLink } from "react-router-dom";
import styles from "../styles/HeaderMiddleLogoBox.module.css";
const HeaderMiddleLogoBoxComponent = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={`ml-5 shrink-0 ${styles.headerMiddleLogoBox}`}
      >
        <div class="w-[195px] h-[30px] leading-none">
          <img
            class="w-[195px] h-[30px] leading-none object-cover inline-block"
            src=""
            alt="لوگوی Document"
          />
        </div>
      </NavLink>
    </>
  );
};

export default HeaderMiddleLogoBoxComponent;
