import React, { useEffect, useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const [scrollTop, setScrollTop] = useState<Boolean>(true);

  const scrollToTop = () => {
    if (window.pageYOffset == 0) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollToTop);

  //   return () => {
  //     window.removeEventListener("scroll", scrollToTop);
  //   };
  // }, [scrollToTop]);

  return (
    <header
      className="w-full h-20 z-10 sticky top-0 bg-black"
      // style={{
      //   backgroundColor: `${scrollTop ? "transparent" : "black"}`,
      //   transition: "0.1s ease-in",
      // }}
    >
      <nav className="flex w-full h-full p-5 text-white font-bold">
        <ul className="flex w-full h-full items-center justify-between">
          <div className="flex justify-start justify-self-start md: text-xl">
            <Link
              className="flex justify-center text-center items-center"
              to="/"
            >
              <PlayCircleIcon className="h-5 w-5 text-danger mr-1" />
              <p>Movie</p>
              <p className="text-danger">App</p>
            </Link>
          </div>
          <div className="flex">
            <SearchBar />
          </div>
          <div className="flex gap-3">
            <Link className="hover:text-danger" to="/">
              Home
            </Link>
            <Link className="hover:text-danger" to="/">
              Movies
            </Link>
            <Link className="hover:text-danger" to="/">
              TV Series
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
