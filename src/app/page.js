import Contact from "../Components/Home/Contact/Contact.jsx";
import About from "../Components/Home/About/About.jsx";
import Banner from "../Components/Home/Banner/Banner.jsx";
import Experience from "../Components/Home/Experience/Experience.jsx";

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
