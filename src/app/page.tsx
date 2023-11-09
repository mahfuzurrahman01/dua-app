
import Categories from "@/Components/Categories";
import MainBar from "@/Components/MainBar";
import SettingBar from "@/Components/SettingBar";
import SideBar from "@/Components/SideBar";
import { getCategories, getDuas, getSubCategories } from "@/utils/GiveData";
import Image from "next/image";



export default async function Home() {
  const categories = await getCategories();
  const subcategories = await getSubCategories();
  const duas = await getDuas();
  return (
    <main className="w-full flex gap-1 h-screen overflow-hidden lg:p-0 p-2">
      <div className="w-[9%] min-h-screen lg:flex hidden justify-center items-center p-5 ">
        <SideBar />
      </div>
      <div className="lg:w-[75%] w-full">
        <MainBar />
        <div className="w-full">
          <Categories categories={categories} subcategories={subcategories} duas={duas}  />
        </div>
      </div>
      <div className="w-[22%] lg:block hidden">
        <SettingBar />
      </div>
    </main>
  );
}



