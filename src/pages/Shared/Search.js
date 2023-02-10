import React from "react";

const Search = () => {
  return (
    <div className=" md:mt-0 mt-3 flex bg-white items-center border border-gray-400">
      <input
        className="w-full py-2 px-3 outline-none"
        type="text"
        placeholder="Search"
      />
      {searchIcon}
    </div>
  );
};

export default Search;

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
