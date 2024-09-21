import Image from "next/image";
import abir from "../../../../public/129941899_1526104271113036_5716203448165447673_n-modified.ico";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="max-w-screen-lg mx-auto mt-10 flex items-center justify-center gap-x-16">
      <div className="">
        <Image src={abir} width={350} className="w-[400px]"/>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold text-gray-500 text-center">Hello, I'm</p>
        <h1 className="font-bold text-5xl text-center">Ahnaf Abir</h1>
        <p className="text-gray-500 text-[28px] font-bold text-center">
          Frontend Developer
        </p>
        
        <div className="flex gap-x-4 h-[50px]">
          <button className=" flex items-center justify-center rounded-full border-2 border-black w-[120px] h-full font-bold text-[13px] hover:bg-gray-900 hover:text-white">Download CV</button>
          <button className=" flex items-center justify-center rounded-full border-2 border-black w-[120px] h-full font-bold text-[13px] hover:bg-gray-900 hover:text-white">Contact Info</button>
        </div>
         
        <div className="flex justify-center items-center cursor-pointer">
         <Link href={"https://github.com/Ahnaf-Hossain-Abir"}><FaGithub className="w-8 h-8" /></Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
