import axios from "axios";
import { MediaType, Movie, MovieInfoType } from "../types/movieType";

export const getTrendings = async (mediaType: MediaType): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}trending/${mediaType}/week?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data.results;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL_POPULAR_MOVIES}/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const getPopularTVs = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL_POPULAR_TVS}/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

export const getUpcommingMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL_UPCOMING}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL_TOP_RATED_MOVIES}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );

    return data.results;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

export const getTopRatedTVs = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL_TOP_RATED_TV}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );

    return data.results;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

export const getMovieDetails = async (id: string): Promise<MovieInfoType> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL_GET_DETAILS_MOVIE}${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos,images,credits&include_image_language=en,null`
    );
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
