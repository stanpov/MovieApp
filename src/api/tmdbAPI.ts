import axios from "axios";
import { MediaType, Movie, MovieInfoType } from "../types/movieType";

const headers = {
  Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
};

export const fetchData = async (url: string, params?: any) => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
