import React from "react";

import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
const MainBar = () => {
  return (
    <header className="pt-4 px-4 bg-transparent text-gray-600 w-[98%] lg:block hidden">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <p className="text-2xl font-medium">Dua page</p>
        <div className="flex justify-end gap-80 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Dua name"
              className="text-sm text-gray-700 w-96 h-11 rounded-md py-1 px-3"
            />
            <div className="p-2 bg-gray-100 rounded-md absolute right-1 top-1 cursor-pointer">
              <AiOutlineSearch className=" w-8 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainBar;
