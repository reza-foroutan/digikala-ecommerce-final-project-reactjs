import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, {
          signal: controller.signal, 
        });
        setData(res.data);
        setError(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(err.message || "خطایی در دریافت اطلاعات رخ داد");
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
