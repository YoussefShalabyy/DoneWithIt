import { useState } from "react";


export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getItems = async () => {
    try {
      setLoading(true);
      const response = await apiFunc();
      setLoading(false);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };
  return {
    data,
    loading,
    getItems,
    error,
  };
};
