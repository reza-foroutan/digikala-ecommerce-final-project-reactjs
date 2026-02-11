const NotificationIcon = ({ className = "w-6 h-6", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor" // این باعث می‌شود رنگ از کلاس‌های Tailwind (مثل text-gray-700) گرفته شود
      className={className}
      {...props}
    >
      {/* اینجا باید Path آیکون خودتان را قرار دهید. این یک نمونه استاندارد است: */}
      <path
        fillRule="evenodd"
        d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default NotificationIcon;
