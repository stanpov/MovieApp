import axios from "axios";
import { Movie } from "../types/movieType";

export const fetchAllMovies = async (): Promise<Movie[]> => {
  const data: Movie[] = await axios.get(
    `${import.meta.env.VITE_BASE_URL}movie`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    }
  );

  return data;
};
