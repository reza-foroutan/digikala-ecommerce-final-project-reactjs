import { useState, useEffect, useCallback } from "react";
import api from "@/core/axios";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(url, options);
      setData(response.data);
    } catch (err) {
      console.error(`خطا در دریافت اطلاعات از ${url}:`, err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]); // وابستگی به URL و آپشن‌ها

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // متد refetch برای بارگذاری مجدد دستی (مثلاً بعد از حذف آیتم)
  const refetch = () => fetchData();

  return { data, loading, error, refetch };
};

export default useFetch;
