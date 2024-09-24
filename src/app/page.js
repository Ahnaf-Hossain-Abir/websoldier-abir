import Contact from "@/Components/Home/Contact/Contact";
import About from "@/Components/Home/About/About";
import Banner from "@/Components/Home/Banner/Banner";
import Image from "next/image";
import Experience from "@/Components/Home/Experience/Experience";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}
