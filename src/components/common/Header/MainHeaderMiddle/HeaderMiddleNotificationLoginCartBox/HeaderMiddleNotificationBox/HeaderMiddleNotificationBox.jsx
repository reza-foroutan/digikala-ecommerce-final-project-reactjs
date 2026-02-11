import { Link } from "react-router-dom";
import styles from "./styles/styleHeaderMiddleNotificationBox.module.css";
// ایمپورت آیکون جدید
import NotificationIcon from "@/components/icons/NotificationIcon";

const HeaderMiddleNotificationBox = () => {
  return (
    <>
      <div
        className={`${styles.headerMiddleNotificationBox} w-10 h-11 flex items-center justify-center`}
      >
        <div className="notification-box w-full h-11 flex justify-center items-center">
          <Link
            to="/profile/notification/" // مسیر نسبی ./ را به / تغییر دادم برای اطمینان
            className="notification-box-link w-10 h-10 p-2 box-border flex justify-center items-center cursor-pointer shrink-0 relative ml-3 no-underline group"
          >
            <div className="notification-box-link-box w-10 h-10 flex justify-center items-center">
              {/* استفاده از کامپوننت آیکون */}
              <NotificationIcon className="w-6 h-6 font-normal fill-gray-700 group-hover:fill-black transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderMiddleNotificationBox;
