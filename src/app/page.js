import Contact from "@/Components/Home/Contact/Contact";
import About from "@/Components/Home/About/About";
import Banner from "@/Components/Home/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Contact/>
    </div>
  );
}
