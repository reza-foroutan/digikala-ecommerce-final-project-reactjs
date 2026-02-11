import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";

const HeaderMiddleSearchBox = () => {
  // ۱. فراخوانی هر دو Endpoint
  const { data: productsData, loading: productsLoading } = useFetch("/product");
  const { data: articlesData, loading: articlesLoading } =
    useFetch("/articles");

  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // وضعیت لودینگ کلی (اگر هرکدام در حال لود باشند)
  const loading = productsLoading || articlesLoading;

  // ۲. نرمال‌سازی و ترکیب دیتا با useMemo برای بهینه‌سازی
  const combinedData = useMemo(() => {
    const combined = [];

    // اضافه کردن محصولات به لیست ترکیبی با ساختار مشترک
    if (productsData) {
      productsData.forEach((product) => {
        combined.push({
          id: `product-${product.id}`, // پیشوند برای جلوگیری از کلیدهای تکراری
          type: "product",
          title: product.name,
          category: product.category || product.brand,
          imageUrl: product.images?.[0] || "https://via.placeholder.com/50",
          linkUrl: `/product/${product.id}`,
        });
      });
    }

    // اضافه کردن مقالات به لیست ترکیبی با ساختار مشترک
    if (articlesData) {
      articlesData.forEach((article) => {
        combined.push({
          id: `article-${article.id}`,
          type: "article",
          title: article.nameFaArticleFa || article.nameFaArticleEn, // استفاده از نام فارسی در اولویت
          category: "مقاله", // دسته بندی ثابت
          imageUrl: article.imageArticle || "https://via.placeholder.com/50",
          linkUrl: `/article/${article.slug || article.id}`, // استفاده از slug در اولویت
        });
      });
    }

    return combined;
  }, [productsData, articlesData]); // این هوک فقط زمانی اجرا می‌شود که دیتا تغییر کند

  // ۳. فیلتر کردن روی دیتای ترکیبی
  const filteredResults = useMemo(() => {
    if (!searchQuery || !combinedData) return [];

    const term = searchQuery.toLowerCase();
    return combinedData.filter((item) =>
      item.title?.toLowerCase().includes(term),
    );
  }, [searchQuery, combinedData]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="header-middle-search-box w-[84%] h-11 flex z-50">
        <div className="header-middle-search-box-wrapper w-full h-11 flex justify-start items-center relative">
          <input
            type="search"
            className="w-[600px] h-11 relative flex justify-start px-4 box-border whitespace-nowrap text-ellipsis text-[12px] font-IRANYekanXFaNum font-normal leading-11 bg-neutral-100 rounded-sm mr-8 transition-all duration-150 ease-in outline-none border-none placeholder:font-IRANYekanXFaNum placeholder:font-medium focus:bg-white focus:shadow-md focus:rounded-b-none"
            placeholder="جستجو در محصولات و مقالات..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            autoComplete="off"
          />

          {/* ۴. نمایش نتایج جستجو */}
          {isFocused && searchQuery && (
            <div className="absolute top-11 right-8 w-[600px] bg-white shadow-lg border border-t-0 border-gray-200 rounded-b-md overflow-hidden z-50 max-h-[400px] overflow-y-auto">
              {loading && (
                <div className="p-4 text-center text-sm text-gray-500">
                  در حال جستجو...
                </div>
              )}

              {!loading && filteredResults.length === 0 && (
                <div className="p-4 text-center text-sm text-gray-500">
                  موردی یافت نشد
                </div>
              )}

              {!loading &&
                filteredResults.map((item) => (
                  <Link
                    key={item.id}
                    to={item.linkUrl}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-100"
                  >
                    <div className="w-12 h-12 shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800 line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.category}
                      </span>
                    </div>

                    {/* نمایش یک تگ برای تشخیص نوع نتیجه (محصول یا مقاله) */}
                    {item.type === "article" && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-auto">
                        مقاله
                      </span>
                    )}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>

      {isFocused && searchQuery && (
        <div
          className="fixed inset-0 bg-black/30 z-40 top-[150px]"
          onClick={() => setIsFocused(false)}
        ></div>
      )}
    </>
  );
};

export default HeaderMiddleSearchBox;
