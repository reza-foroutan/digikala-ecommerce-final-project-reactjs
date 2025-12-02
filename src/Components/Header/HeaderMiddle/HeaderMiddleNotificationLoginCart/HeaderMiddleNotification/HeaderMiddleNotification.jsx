import { Link } from "react-router-dom";

const HeaderMiddleNotificationComponent = () => {
  return (
    <>
      <div className="header-middle-notification-box w-10 h-11 flex items-center justify-center">
        <div className="notification-box w-100 h-11 flex justify-center items-center">
          <Link
            to="./profile/notification/"
            className="notification-box-link w-10 h-10 p-2 box-border flex justify-center items-center cursor-pointer shrink-0 relative ml-3 no-underline"
          >
            <div className="notification-box-link-box w-10 h-10 flex justify-center items-center">
              <svg
                className="w-6 h-6 font-normal fill-icon-high-emphasis"
                id="notificationOffOutline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderMiddleNotificationComponent;
