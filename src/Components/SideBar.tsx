import Image from "next/image";
import React from "react";
import pray from "../../public/handlogo.png";
import donation from "../../public/donation.png";
import { CiHome, CiGrid41, CiBookmark } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { GiMasonJar } from "react-icons/gi";
import { RiMessage3Line } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="w-[100%] rounded-2xl bg-white flex justify-center items-center flex-col gap-16">
      <Image src={pray} width={500} height={500} className="w-20 h-20" alt="" />
      <div className="flex flex-col gap-5">
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <CiHome className="text-xl text-gray-700 font-bold" />
        </div>
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <CiGrid41 className="text-xl text-gray-700 font-bold" />
        </div>
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <GoLightBulb className="text-xl text-gray-700 font-bold" />
        </div>
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <CiBookmark className="text-xl text-gray-700 font-bold" />
        </div>
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <GiMasonJar className="text-xl text-gray-700 font-bold" />
        </div>
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <RiMessage3Line className="text-xl text-gray-700 font-bold" />
        </div>
        <div className="bg-slate-100 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer ">
          <IoMdBook className="text-xl text-gray-700 font-bold" />
        </div>
      </div>
      <Image
        src={donation}
        width={500}
        height={500}
        className="w-20 h-20"
        alt="donationIcon"
      />
    </div>
  );
};

export default SideBar;
