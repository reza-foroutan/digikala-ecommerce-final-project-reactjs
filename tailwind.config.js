/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"; // ۱. این خط را ایمپورت کنید

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ۲. فونت وزیر را به عنوان اولین اولویت به خانواده sans اضافه می‌کنیم
      fontFamily: {
        sans: ["IRANYekan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
