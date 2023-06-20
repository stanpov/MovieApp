import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Image from "./Image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  const [backgraund, setBackground] = useState<string>("");
  const [title, setTitle] = useState<String>("");
  const [overview, setOverview] = useState<String>("");
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const randomNumberMovie = Math.floor(Math.random() * 20);
    const bg = data[randomNumberMovie]?.backdrop_path;
    const movieTitle = data[randomNumberMovie]?.title;
    const movieOverview = data[randomNumberMovie]?.overview;
    setBackground(bg as string);
    setTitle(movieTitle);
    setOverview(movieOverview);
  }, [data]);

  if (backgraund === "") {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full md:h-[450px] relative">
      <Image imagePath={backgraund} height="100%" brightness />
      <div className="absolute top-20 left-8">
        <h1 className="text-3xl text-clip font-bold mb-3 text-white">
          {title}
        </h1>
        <p className="w-1/2 overflow-hidden overflow-ellipsis mb-6 text-white">
          {overview}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="h-10 w-24 rounded-lg bg-gray-100 z-10 left-8 font-semibold text-black flex items-center text-center justify-center hover:bg-gray-300 transition-all duration-200"
          >
            <PlayIcon className="w-4 h-4 mr-1" />
            Play
          </button>
          <button
            type="button"
            className="h-10 w-24 rounded-lg bg-neutral-600 font-semibold z-10 left-8 text-white flex items-center text-center justify-center  hover:bg-neutral-500 transition-all duration-200"
          >
            <AiOutlineInfoCircle className="w-4 h-4 mr-1" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
