import axios from "axios";

// آدرس سرور json-server (مطمئن شو که روی پورت 3001 ران باشد)
const API_BASE_URL = "http://localhost:3001";

// ساخت یک نمونه (Instance) اختصاصی از Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // زمان انتظار برای پاسخ (15 ثانیه)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ─── Request Interceptor ─────────────────────────────────────────────────────
// قبل از ارسال درخواست اجرا می‌شود (مثلاً برای افزودن توکن احراز هویت)
api.interceptors.request.use(
  (config) => {
    // مثال: اگر توکن در لوکال استوریج باشد، به هدر اضافه کن
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ─── Response Interceptor ────────────────────────────────────────────────────
// بعد از دریافت پاسخ اجرا می‌شود (برای مدیریت خطاهای عمومی مثل 401 یا 500)
api.interceptors.response.use(
  (response) => {
    // اگر پاسخ موفقیت‌آمیز بود، خود پاسخ را برگردان
    return response;
  },
  (error) => {
    // مدیریت خطاهای کلی
    if (error.response) {
      // سرور پاسخ داده اما با کد خطا (مثل 404, 500)
      console.error(
        "Server Error:",
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      // درخواست ارسال شده اما پاسخی دریافت نشده (مشکل شبکه)
      console.error("Network Error: No response received", error.request);
    } else {
      // خطایی در تنظیم درخواست رخ داده
      console.error("Request Setup Error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
