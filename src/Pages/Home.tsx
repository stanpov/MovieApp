import React, { useState } from "react";
import { useEffect } from "react";
import { Movie } from "../types/movieType";
import { fetchAllMovies } from "../utils/moviesUtil";

const Home = () => {
  const [movies, setmovies] = useState<Movie[]>();
  const [randomMovie, setRandomMovie] = useState<number>(0);

  useEffect(() => {
    fetchAllMovies().then((res: any) => {
      setmovies(res?.data?.results);
      setRandomMovie(Math.floor(Math.random() * (res.data.results.length - 1)));
    });
  }, []);

  if (movies?.length === 0) {
    return <p>Loading....</p>;
  }
  return (
    <div className="flex flex-row w-full h-[80vh]">
      {movies?.length && (
        <img
          className="w-full object-contain"
          src={`${import.meta.env.VITE_IMAGE_URL}${
            movies[randomMovie].poster_path
          }`}
        />
      )}
    </div>
  );
};

export default Home;
