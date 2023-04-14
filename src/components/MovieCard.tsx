import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types/movieType";

export interface MovieCardProps {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: Number;
  riginal_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
  original_language: String;
}

const MovieCard: React.FC<MovieCardProps> = ({
  adult,
  backdrop_path,
  genre_ids,
  id,
  riginal_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
  original_language,
}) => {
  const router = useNavigate();
  return (
    <div
      className="flex flex-col text-white relative h-full mx-2 my-1"
      onClick={() => router(`/movie/${id}`)}
    >
      <div>
        <img
          className="h-full w-full object-cover hover:scale-105 transition-all"
          src={`${import.meta.env.VITE_IMAGE_URL}${backdrop_path}`}
        />
        <div className="text-clip text-center">{title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
