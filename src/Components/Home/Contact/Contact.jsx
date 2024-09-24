import Link from "next/link";
import Subsection from "../../CommonComponents/Subsection/Subsection";
import { TbBrandFiverr } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-screen-lg mx-auto ">
      <Subsection title={"Get in Touch"} subTitle={"Contact Me"} />

      <div className="w-full flex justify-center">
        <div className=" w-[300px] sm:w-[400px] justify-center sm:justify-normal border border-black rounded-[32px]">
          <div className="w-full flex flex-col sm:flex-row-reverse justify-center gap-x-10 py-6 px-6">
            <div className="flex justify-center sm:justify-normal gap-x-2 items-center">
              <TbBrandFiverr className="w-10 h-10 text-green-600" />
              <a
                className="text-3xl font-medium border-b-2 border-transparent hover:border-gray-300 transition duration-300 hover:text-gray-600 hover:font-normal hover:duration-300"
                href="https://www.fiverr.com/hoithub25724/buying?source=avatar_menu_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abir
              </a>
            </div>
            <div className="flex justify-center sm:justify-normal items-center gap-x-2">
              <FaWhatsapp className="w-10 h-10 text-green-600" />
              <a
                href="https://wa.me/8801843044577?text=Hello,%20I%20would%20like%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                +8801843-044577
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
