import React from "react";
import Image from "next/image";
import hozorIcon from "../../public/hozorIcon.png";
import { AiFillCaretDown } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { CiHome, CiGrid41 } from "react-icons/ci";
import { TbBoxMultiple } from "react-icons/tb";
const SettingBar = () => {
  return (
    <div className="w-[95%] flex flex-col mt-8 gap-5 ">
      <div className="flex justify-end items-center gap-3 mr-3">
        <Image
          src={hozorIcon}
          alt="User"
          className="w-10 h-10"
          width={100}
          height={100}
        />
        <AiFillCaretDown />
      </div>
      <div className="w-11/12 mx-auto rounded-[1rem] bg-white py-5">
        <p className="text-center text-xl font-semibold text-dark my-5 px-5">
          Settings
        </p>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-11/12 mx-auto bg-zinc-100 rounded-lg py-1 px-2 flex justify-start gap-4 items-center">
            <div className="bg-slate-200 w-10 h-10 flex justify-center items-center rounded-full hover:scale-110 duration-300 cursor-pointer ">
              <IoLanguageOutline className=" text-gray-700 font-bold text-xl" />
            </div>
            <p className="text-gray-400"> Language settings</p>
          </div>
          <div className="w-11/12 mx-auto bg-zinc-100 rounded-lg py-1 px-2 flex justify-start gap-4 items-center">
            <div className="bg-slate-200 w-10 h-10 flex justify-center items-center rounded-full hover:scale-110 duration-300 cursor-pointer ">
              <TbBoxMultiple className=" text-gray-700 font-bold text-xl" />
            </div>
            <p className="text-gray-400">General Settings</p>
          </div>
          <div className="w-11/12 mx-auto bg-zinc-100 rounded-lg py-1 px-2 flex justify-start gap-4 items-center">
            <div className="bg-slate-200 w-10 h-10 flex justify-center items-center rounded-full hover:scale-110 duration-300 cursor-pointer ">
              <CiGrid41 className=" text-gray-700 font-bold text-xl" />
            </div>
            <p className="text-gray-400">Font Settings</p>
          </div>
          <div className="w-11/12 mx-auto bg-zinc-100 rounded-lg py-1 px-2 flex justify-start gap-4 items-center relative overflow-hidden">
            <div className="bg-slate-200 w-10 h-10 flex justify-center items-center rounded-full hover:scale-110 duration-300 cursor-pointer ">
              <CiGrid41 className=" text-green-600 font-bold text-2xl" />
            </div>
            <p className="text-green-600 font-semibold">Appearance Settings</p>
            <div className="w-1 h-full bg-green-600 absolute top-0 left-0"></div>
          </div>
          <div className="w-11/12 mx-auto rounded-lg py-1 px-2 flex justify-between gap-4 items-center">
            <p className="text-gray-400">Font Settings</p>
            <label
              htmlFor="Toggle2"
              className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
            >
              <span className="relative">
                <input id="Toggle2" type="checkbox" className="hidden peer" />
                <div className="w-10 h-3 rounded-full shadow bg-gray-400 peer-checked:bg-green-500"></div>
                <div className="absolute left-0 w-5 h-5 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-200"></div>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
