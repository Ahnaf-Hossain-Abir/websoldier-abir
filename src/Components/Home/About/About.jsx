import Aboutheader from "./Aboutheader";
import Aboutimg from "./Aboutimg";
import AboutText from "./Abouttext";


const About = () => {
    return (
        <section id="about" className="max-w-screen-lg mx-auto">
        <Aboutheader/>
        
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-center lg:justify-center gap-8">
          <Aboutimg/>
          <AboutText/>
        </div>
        </section>
    );
};

export default About;