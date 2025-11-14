import React from "react";

function Navbar() {
  return (
    <div className="h-[50px] bg-white flex justify-between items-center px-5">
      <div className="flex space-x-5">
        <img className="h-7" src="src/assets/elements/bar.svg" alt="" />
        <img className="h-7" src="src/assets/elements/ytlogo.svg" alt="" />
      </div>
      <div className="flex  w-[45%] justify-center">
        <input
          className="border rounded-l-full px-3 py-1 w-[70%]"
          type="text"
          placeholder="Search"
        />
        <button className="border rounded-r-full w-[55px] flex justify-center items-center bg-gray-100">
          <img className="h-6" src="src/assets/elements/search.svg" alt="" />
        </button>
        <button className="w-10 ml-4  bg-gray-100 rounded-full flex justify-center items-center">
          <img className="h-6" src="src/assets/elements/mic.svg" alt="" />
        </button>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button className="flex justify-center items-center px-3 py-1 bg-gray-100 rounded-full mr-4 h-9 space-x-1">
          <img className="h-5" src="src/assets/elements/plus.svg" alt="" />
          <span>Create</span>
        </button>
        <button className="relative">
          <img src="src/assets/elements/bell.svg" alt="" />
          <div className="absolute top-0 right-0 h-3 w-3 border    bg-red-500 rounded-full font-medium flex justify-center items-center text-white text-[7px]">
            7
          </div>
        </button>
        <button className="flex ">
          <img
            className="rounded-full h-11 w-11"
            src="src/assets/elements/profilepic.jpg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
