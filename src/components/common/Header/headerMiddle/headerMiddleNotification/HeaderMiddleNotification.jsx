import { NavLink } from "react-router-dom";
import NotificationOffOutline from "../../../../icons/notificationOffOutline";

const HeaderMiddleNotification = () => {
  return (
    <>
      <div className="header-middle-notification-box w-10 h-11 flex items-center justify-center">
        <div className="notification-box w-100 h-11 flex justify-center items-center">
          <NavLink
            to=""
            className="notification-box-link w-10 h-10 p-2 box-border flex justify-center items-center cursor-pointer shrink-0 relative ml-3 no-underline"
          >
            <div className="notification-box-link-box w-10 h-10 flex justify-center items-center">
              <NotificationOffOutline className="w-6 h-6 font-normal fill-icon-high-emphasis" />
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HeaderMiddleNotification;
