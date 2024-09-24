import Subsection from "../../CommonComponents/Subsection/Subsection";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";


const Experience = () => {
    return (
        <section id="experience" className="max-w-screen-lg mx-auto mt-28 mb-28">
            <Subsection title={"Explore My"} subTitle={"Experience"}/>

            <div className="flex items-center gap-x-10 mt-8">
            <div className="w-[500px] h-[350px] border border-gray-500 rounded-3xl flex flex-col gap-y-4 ">
            <div className="py-6">
            <h3 className="text-center text-3xl font-semibold text-gray-600">Fundamental Web Technologies</h3> 
            </div>

            <div className="flex flex-col gap-y-8">
             <div className="flex justify-center items-center gap-x-3">
              <div><FaHtml5 className="w-10 h-10 text-[#E34F26]"/></div>
              <p className="text-3xl font-bold">HTML</p>
             </div>
             <div className="flex justify-center items-center gap-x-3">
              <div><FaCss3Alt className="w-10 h-10 text-[#264DE4]"/></div>
              <p className="text-3xl font-bold">CSS</p>
             </div>
             <div className="flex justify-center items-center gap-x-3">
              <div><FaJs className="w-10 h-10 text-[#F7DF1E]"/></div>
              <p className="text-3xl font-bold">JAVASCRIPT</p>
             </div>
            </div>
            </div>
            <div className="w-[500px] h-[350px] border border-gray-500 rounded-3xl flex flex-col gap-y-4">
            <div className="py-6">
            <h3 className="text-center text-3xl font-semibold text-gray-600">FrameWorks & Libraries</h3> 
            </div>

            <div className="flex flex-col gap-y-8">
             <div className="flex justify-center items-center gap-x-3">
              <div><RiTailwindCssFill className="w-10 h-10 text-[#38B2AC]"/></div>
              <p className="text-3xl font-bold">TAILWIND</p>
             </div>
             <div className="flex justify-center items-center gap-x-3">
              <div><FaReact className="w-10 h-10 text-[#61DAFB]"/></div>
              <p className="text-3xl font-bold">REACT</p>
             </div>
             <div className="flex justify-center items-center gap-x-3">
              <div><SiNextdotjs className="w-10 h-10 "/></div>
              <p className="text-3xl font-bold">NEXT.JS</p>
             </div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Experience;