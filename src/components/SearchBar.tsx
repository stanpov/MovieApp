import React from "react";

const SearchBar = () => {
  return (
    <div className="md: w-96 h-9">
      <input
        className="outline-none w-full h-full rounded-md text-black placeholder:pl-2 placeholder:text-danger pl-2"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
