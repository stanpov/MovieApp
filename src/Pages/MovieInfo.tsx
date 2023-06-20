// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import { getMovieDetails } from "../api/tmdbAPI";
// import { MovieInfoType } from "../types/movieType";
// import { AiOutlineStar } from "react-icons/ai";
// import { BsPeople } from "react-icons/bs";

// const MovieInfo = () => {
//   const [movie, setMovie] = useState<MovieInfoType>();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       getMovieDetails(id).then((result) => {
//         setMovie(result);
//       });
//     }
//   }, []);
//   //   console.log(movie);
//   if (movie === undefined || movie === null) {
//     return <div>Loading....</div>;
//   }
//   return (
//     <div className="flex flex-col h-full w-full bg-black px-48">
//       <div className="h-[70vh] mb-4">
//         <img
//           className="h-full w-full object-center brightness-[55%]"
//           src={`${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`}
//         />
//       </div>
//       <div className="flex justify-center items-start z-10  text-white">
//         <img
//           className="w-48 h-48 mr-4"
//           src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
//         />
//         <div className="flex flex-col text-left">
//           <div className="flex justify-start items-start gap-2">
//             {movie.genres &&
//               movie.genres.length > 0 &&
//               movie.genres.map((item, index) => (
//                 <div key={index} className="rounded-md bg-slate-600 p-1">
//                   {item.name}
//                 </div>
//               ))}
//           </div>
//           <h2 className="text-2xl font-bold">{movie.title}</h2>
//           <p className="overflow-auto mb-1">{movie.overview}</p>
//           <div className="flex flex-col items-start justify-center">
//             <div className="flex items-center">
//               <AiOutlineStar className="fill-yellow-300 mr-1" />
//               <p>Rating: {Number(movie.vote_average)}</p>
//             </div>
//             <div className="flex items-center">
//               <BsPeople className="fill-yellow-300 mr-1" />
//               <p>Voted: {Number(movie.vote_count)}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <h2 className="text-white">CASTS</h2>
//       <div className="flex ">movie info</div>
//     </div>
//   );
// };

// export default MovieInfo;
