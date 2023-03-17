import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const executeAxios = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data.data);

        if (data.data.length > 0) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    executeAxios();
  }, [url]);

  return { data, loading };
};