import { useEffect, useState } from "react";
import { fetchData } from "../api/tmdbAPI";
import { Movie } from "../types/movieType";

const useFetch = (url: string, params?: any) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchData(url)
      .then((resp: { results: Movie[] }) => {
        console.log("from hook", resp.results);
        setData(resp.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
