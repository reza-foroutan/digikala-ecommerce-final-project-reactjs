// HeaderMiddleNotificationComponent.jsx

import { NavLink } from "react-router-dom";
import styles from "./styles/styleHeaderMiddleNotification.module.css";

const HeaderMiddleNotificationComponent = () => {
  return (
    <div
      className={`${styles.headerMiddleNotificationBox} w-10 h-11 flex items-center justify-center`}
    >
      <div
        className={`${styles.notificationBox} w-100 h-11 flex justify-center items-center`}
      >
        <NavLink
          to="/profile/notification/"
          className={`${styles.notificationBoxLink} w-10 h-10 p-2 box-border flex justify-center items-center cursor-pointer shrink-0 relative ml-3 no-underline`}
        >
          <svg
            width="24"
            height="24"
            style={{
              fill: "var(--color-icon-high-emphasis)",
            }}
          >
            <use href="#notificationOffOutline" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderMiddleNotificationComponent;
