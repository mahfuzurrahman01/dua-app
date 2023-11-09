/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { getCategories, getSubCategories } from "@/utils/GiveData";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ICategory, IDua, ISubcategory } from "@/utils/Type";
import ReactAudioPlayer from "react-audio-player";
import { GiPlayButton, GiWhiteBook } from "react-icons/gi";
import { IoBulbOutline, IoCopyOutline } from "react-icons/io5";
import { CiBookmark, CiSquareInfo } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { RxCheckCircled } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";
type ISubcategories = ISubcategory[];
type IDuaArray = IDua[];
type CategoryCardProps = {
  categories: ICategory[];
  subcategories: ISubcategories; // You should replace `any[]` with the actual type of your subcategories.
  duas: IDuaArray;
};
const Categories = ({ subcategories, categories, duas }: CategoryCardProps) => {
  const [subCategory, setSubCategory] = useState<ISubcategories>(
    [] as ISubcategories
  );
  const [allDua, setAllDua] = useState<IDua[]>([] as IDua[]);
  const [subCatDua, setSubCatDua] = useState<IDua[]>([] as IDua[]);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedSubCatId, setSelectedSubCatId] = useState<number>(1);
  const [selectedDoa, setSelectedDoa] = useState<any>(1);
  useEffect(() => {
    const getSubCategories = subcategories.filter(
      (item: ISubcategory) => item?.cat_id === selectedId
    );
    setSubCategory(getSubCategories);
    subCategoryHandle();
  }, [selectedId]);

  const subCategoryHandle = () => {
    const catId = selectedId;
    const subCatId = selectedSubCatId;
    const allDuaLists = duas.filter((item: IDua) => catId === item.cat_id);
    setAllDua(allDuaLists);
    const subdua = duas.filter(
      (item: IDua) => catId === item.cat_id && subCatId === item?.subcat_id
    );
    setSubCatDua(subdua);
  };

  useEffect(() => {
    subCategoryHandle();
  }, [selectedSubCatId]);

  const playAudio = (audio: string | undefined) => {
    let surah = new Audio(audio);
    surah.play();
  };

  const notify = (text: string) => toast.success(text);

  return (
    <div className="w-full relative">
      <div className="drawer absolute -top-12 left-2 z-50 lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="bg-green-600 text-white py-2 px-3 rounded-md drawer-button"
          >
            Sub categories
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-white text-base-content">
            {/* Sidebar content here */}
            <ul className="flex flex-col gap-2 py-2 px-2">
              {categories?.map((item: ICategory, index: number) => (
                <div
                  id={`${item?.cat_name_en}`}
                  key={item?.id}
                  className="scroll-m-52"
                >
                  <a href={`#${item?.cat_name_en}`}>
                    <div
                      className={`${
                        selectedId === item.cat_id
                          ? "bg-gray-200 duration-300 flex justify-between items-center gap-4 py-2 px-4 rounded-md cursor-pointer  "
                          : "hover:bg-gray-200 duration-300 flex justify-between items-center gap-4 py-2 px-4 rounded-md cursor-pointer sticky "
                      }`}
                      onClick={() => setSelectedId(item?.cat_id)}
                    >
                      <div className="flex justify-start items-center gap-5 duration-300">
                        <Image
                          src={`${item.cat_icon}.svg`}
                          alt="icon"
                          width={100}
                          height={100}
                          className="w-10 h-10 bg-slate-50 p-1 rounded-md"
                        />

                        <div>
                          <li
                            className={`${
                              selectedId === item?.cat_id
                                ? "font-semibold text-green-600 duration-300"
                                : "font-normal text-gray-500 duration-300"
                            }`}
                          >
                            {item?.cat_name_en}
                          </li>
                          <small className="text-xs text-gray-500">
                            Subcategory: {item?.no_of_subcat}
                          </small>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <li className="text-base font-semibold text-gray-500">
                          {item?.no_of_dua}
                        </li>
                        <small className="text-xs text-gray-500">Dua's</small>
                      </div>
                    </div>
                  </a>
                  <div
                    className={`${
                      selectedId === item?.cat_id
                        ? "my-4 bg-white z-20"
                        : "hidden"
                    }`}
                  >
                    {subCategory?.map((item: ISubcategory) => (
                      <div
                        key={item?.id}
                        className="flex flex-col ml-6 border-dashed border-l border-green-600 gap-0 relative justify-start items-start "
                        onClick={() => setSelectedSubCatId(item?.subcat_id)}
                      >
                        <div className="">
                          <span className="bg-green-600 w-[6px] h-[6px] top-2 rounded-full absolute left-[-4px]"></span>

                          <a href={`#${item?.subcat_id}`}>
                            <p
                              className={`${
                                selectedSubCatId === item?.subcat_id
                                  ? "tracking-tight ml-2  pb-4 cursor-pointer text-green-600"
                                  : "tracking-tight ml-2  pb-4 cursor-pointer"
                              }`}
                            >
                              {item?.subcat_name_en}
                            </p>
                          </a>
                        </div>
                        <div
                          className={`${
                            selectedSubCatId === item?.subcat_id
                              ? "ml-3 mb-3 bg-white z-20 flex flex-col gap-4"
                              : "hidden"
                          }`}
                        >
                          {subCatDua?.map((item: IDua) => (
                            <div
                              key={item?.id}
                              className="flex justify-start items-center gap-3"
                            >
                              <Image
                                src={"/duaarrow.svg"}
                                width={100}
                                height={100}
                                alt="dua"
                                className="w-5 h-5"
                              />
                              <a href={`#${item?.dua_name_en}`}>
                                <p
                                  onClick={() => setSelectedDoa(item?.dua_id)}
                                  className={`${
                                    selectedSubCatId === item?.subcat_id &&
                                    selectedDoa === item?.dua_id
                                      ? "tracking-tight cursor-pointer text-sm text-green-600 "
                                      : "tracking-tight cursor-pointer text-sm text-gray-600"
                                  }`}
                                >
                                  {item?.dua_name_en}
                                </p>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-start lg:gap-5 gap-0 sticky top-0 lg:mt-0 mt-16">
        <div className="w-[30%] h-[85vh] bg-white rounded-xl overflow-scroll no-scrollbar lg:block hidden">
          <div className="flex justify-center items-center flex-col sticky top-0 bg-white z-40">
            <p className="w-full h-14 flex justify-center items-center bg-green-600 text-white ">
              Categories
            </p>
            <div className="relative border border-gray-300 rounded-md w-11/12 my-2 mx-auto">
              <input
                type="text"
                placeholder="Search by Dua name"
                className="text-sm text-gray-700 h-11 rounded-md py-1 px-10 w-full"
              />
              <div className="rounded-md absolute left-1 top-3 cursor-pointer mb-5">
                <AiOutlineSearch className=" w-8 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-2 py-2 px-2">
            {categories?.map((item: ICategory, index: number) => (
              <div
                id={`${item?.cat_name_en}`}
                key={item?.id}
                className="scroll-m-96"
              >
                <a href={`#${item?.cat_name_en}`}>
                  <div
                    className={`${
                      selectedId === item.cat_id
                        ? "bg-gray-200 duration-300 flex justify-between items-center gap-4 py-2 px-4 rounded-md cursor-pointer sticky top-0 "
                        : "hover:bg-gray-200 duration-300 flex justify-between items-center gap-4 py-2 px-4 rounded-md cursor-pointer sticky top-0"
                    }`}
                    onClick={() => setSelectedId(item?.cat_id)}
                  >
                    <div className="flex justify-start items-center gap-5 duration-300">
                      <Image
                        src={`${item.cat_icon}.svg`}
                        alt="icon"
                        width={100}
                        height={100}
                        className="w-10 h-10 bg-slate-50 p-1 rounded-md"
                      />

                      <div>
                        <li
                          className={`${
                            selectedId === item?.cat_id
                              ? "font-semibold text-green-600 duration-300"
                              : "font-normal text-gray-500 duration-300"
                          }`}
                        >
                          {item?.cat_name_en}
                        </li>
                        <small className="text-xs text-gray-500">
                          Subcategory: {item?.no_of_subcat}
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <li className="text-base font-semibold text-gray-500">
                        {item?.no_of_dua}
                      </li>
                      <small className="text-xs text-gray-500">Dua's</small>
                    </div>
                  </div>
                </a>
                <div
                  className={`${
                    selectedId === item?.cat_id
                      ? "my-4 bg-white z-20"
                      : "hidden"
                  }`}
                >
                  {subCategory?.map((item: ISubcategory) => (
                    <div
                      key={item?.id}
                      className="flex flex-col ml-6 border-dashed border-l border-green-600 gap-0 relative justify-start items-start "
                      onClick={() => setSelectedSubCatId(item?.subcat_id)}
                    >
                      <div className="">
                        <span className="bg-green-600 w-[6px] h-[6px] top-2 rounded-full absolute left-[-4px]"></span>

                        <a href={`#${item?.subcat_id}`}>
                          <p
                            className={`${
                              selectedSubCatId === item?.subcat_id
                                ? "tracking-tight ml-2  pb-4 cursor-pointer text-green-600"
                                : "tracking-tight ml-2  pb-4 cursor-pointer"
                            }`}
                          >
                            {item?.subcat_name_en}
                          </p>
                        </a>
                      </div>
                      <div
                        className={`${
                          selectedSubCatId === item?.subcat_id
                            ? "ml-3 mb-3 bg-white z-20 flex flex-col gap-4"
                            : "hidden"
                        }`}
                      >
                        {subCatDua?.map((item: IDua) => (
                          <div
                            key={item?.id}
                            className="flex justify-start items-center gap-3"
                          >
                            <Image
                              src={"/duaarrow.svg"}
                              width={100}
                              height={100}
                              alt="dua"
                              className="w-5 h-5"
                            />
                            <a href={`#${item?.dua_name_en}`}>
                              <p
                                onClick={() => setSelectedDoa(item?.dua_id)}
                                className={`${
                                  selectedSubCatId === item?.subcat_id &&
                                  selectedDoa === item?.dua_id
                                    ? "tracking-tight cursor-pointer text-sm text-green-600 "
                                    : "tracking-tight cursor-pointer text-sm text-gray-600"
                                }`}
                              >
                                {item?.dua_name_en}
                              </p>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="lg:w-[65%] w-full lg:h-[85vh] h-[100vh]  rounded-xl overflow-scroll no-scrollbar flex flex-col gap-5">
          {allDua.map((item: IDua) => (
            <div
              key={item?.id}
              className="bg-white p-5 rounded-lg"
              id={`${item?.subcat_id}`}
            >
              <div
                id={`${item?.dua_name_en}`}
                className="flex gap-4 justify-start items-center"
              >
                <Image
                  src={"/duacard.svg"}
                  width={100}
                  height={100}
                  alt="dua"
                  className="w-10 h-10"
                />
                <p className="text-lg font-semibold text-green-600 text-justify ">
                  {item?.id}. {item?.dua_name_en}
                </p>
              </div>
              <p className="text-lg text-gray-600 ml-2 text-justify my-4">
                {item?.top_en}
              </p>
              <p className="text-xl  text-gray-600 my-4 ml-2 text-right ">
                {item?.dua_arabic}
              </p>
              {item?.transliteration_en && (
                <p className=" my-4 text-justify">
                  <span className="font-semibold">Transliteration: </span>
                  {item?.transliteration_en}
                </p>
              )}
              {item?.translation_en && (
                <p className="text-justify my-4">
                  <span className="font-semibold">Translation: </span>
                  {item?.translation_en}
                </p>
              )}
              <p className=" text-gray-600 text-justify my-4">
                {item?.bottom_en}
              </p>
              <div className="ml-2">
                <p className="text-lg font-semibold text-green-600">
                  Reference:
                </p>
                <p className="font-semibold ">{item?.refference_en}</p>
              </div>
              <div className="ml-2 my-2 flex justify-between items-center">
                {item?.audio !== null ? (
                  // <Image onClick={() => playAudio(item?.audio)} src="/audiobtn.svg" alt="play" width={100} height={100} className="w-10 h-10" />
                  <audio
                    src={item?.audio}
                    controls
                    controlsList="nofullscreen nodownload noremoteplayback"
                  />
                ) : (
                  <div></div>
                )}
                <div className="flex justify-end items-center gap-3">
                  <IoCopyOutline
                    onClick={() => notify("Copied")}
                    className="w-5 h-5  text-gray-600 cursor-pointer"
                  />
                  <CiBookmark
                    onClick={() => notify("Coming soon In sha Allah")}
                    className="w-5 h-5  text-gray-600 cursor-pointer"
                  />
                  <IoBulbOutline
                    onClick={() => notify("Coming soon In sha Allah")}
                    className="w-5 h-5  text-gray-600 cursor-pointer"
                  />
                  <GoShareAndroid
                    onClick={() => notify("Coming soon In sha Allah")}
                    className="w-5 h-5  text-gray-600 cursor-pointer"
                  />
                  <CiSquareInfo
                    onClick={() => notify("Coming soon In sha Allah")}
                    className="w-5 h-5  text-gray-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer
          icon={RxCheckCircled}
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Categories;
