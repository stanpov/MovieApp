import React, { useState } from "react";
import { useEffect } from "react";
import { Slider } from "../components/Slider";
import { Movie } from "../types/movieType";
import {
  PlayIcon,
  InformationCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import TopRated from "../components/TopRated";
import TrendingNow from "../components/TrendingNow";
import Popular from "../components/Popular";
import Banner from "../components/Banner";

const Home: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [trendingTVs, setTrendingTVs] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [populartTVs, setpopulartTVs] = useState<Movie[]>([]);
  const [topRatedTv, setTopRatedTv] = useState<Movie[]>([]);
  const [topRatedMovie, setTopRatedMovie] = useState<Movie[]>([]);
  const [upCommingMovies, setUpcommingMovies] = useState<Movie[]>([]);
  const [randomMovie, setRandomMovie] = useState<number>();
  // const { loading } = useFetch("/movie/top_rated");
  useEffect(() => {}, []);

  // if (loading) {
  //   return <p>Loading....</p>;
  // }

  return (
    <div>
      <Banner />
      <TopRated />
      <TrendingNow />
      <Popular />
    </div>
  );
  // return (
  //   <>
  //     {trendingMovies?.length && randomMovie && (
  //       <div className="bg-black">
  //         <div
  //           key={trendingMovies[randomMovie].id.toString()}
  //           className="w-full h-[90vh] relative"
  //         >
  //           <button
  //             type="button"
  //             className="flex justify-center items-center font-semibold absolute px-5 py-2  rounded-md top-3/4 left-[5%] transition-transform 0.5s ease-linear border-none bg-danger hover:scale-110 z-20 text-white"
  //           >
  //             <PlayIcon className="w-4 h-4 mr-1" />
  //             Play
  //           </button>
  //           <button
  //             type="button"
  //             className="flex items-center font-semibold absolute px-5 py-2 rounded-md top-3/4 left-[13%] transition-transform 0.5s ease-linear  border-none bg-gray-300 hover:scale-110 z-20 text-black"
  //           >
  //             <InformationCircleIcon className="w-4 h-4 mr-2" />
  //             Details
  //           </button>
  //           <img
  //             className="absolute h-full w-full top-0 right-0 object-fill brightness-[55%]"
  //             src={`${import.meta.env.VITE_IMAGE_URL}${
  //               trendingMovies[randomMovie].backdrop_path
  //             }`}
  //           />
  //           <div className="absolute bottom-1/3 left-[5%] ring-10 z-1">
  //             <p className="text-white text-4xl font-bold mb-5">
  //               {trendingMovies[randomMovie].original_title}
  //             </p>
  //             <p className="text-white text-clip overflow-hidden w-9/12">
  //               {trendingMovies[randomMovie].overview}
  //             </p>
  //           </div>
  //         </div>
  //         <div className="px-10 flex flex-col mt-20">
  //           <h2 className="text-white flex items-center font-bold">
  //             <StarIcon className="h-3 w-3 mr-1 fill-yellow-500" /> TRENDING NOW
  //           </h2>
  //           <Slider>
  //             {trendingMovies.map((item: Movie, index) => (
  //               <MovieCard {...item} key={index} />
  //             ))}
  //           </Slider>
  //         </div>
  //         <div className="px-10 flex flex-col mt-20">
  //           <h2 className="text-white flex items-center font-bold">
  //             <StarIcon className="h-3 w-3 mr-1 fill-yellow-500" /> TOP MOVIES
  //           </h2>
  //           <Slider>
  //             {topRatedMovie.map((item: Movie, index) => (
  //               <MovieCard {...item} key={index} />
  //             ))}
  //           </Slider>
  //         </div>
  //         <div className="px-10 flex flex-col mt-20">
  //           <h2 className="text-white flex items-center font-bold">
  //             <StarIcon className="h-3 w-3 mr-1 fill-yellow-500" /> POPULAR
  //             MOVIES
  //           </h2>
  //           <Slider>
  //             {popularMovies.map((item: Movie, index) => (
  //               <MovieCard {...item} key={index} />
  //             ))}
  //           </Slider>
  //         </div>
  //         <div className="px-10 flex flex-col mt-20">
  //           <h2 className="text-white flex items-center font-bold">
  //             <StarIcon className="h-3 w-3 mr-1 fill-yellow-500" /> TOP TVs
  //           </h2>
  //           <Slider>
  //             {topRatedTv.map((item: Movie, index) => (
  //               <MovieCard {...item} key={index} />
  //             ))}
  //           </Slider>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default Home;
