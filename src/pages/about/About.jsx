
import AboutSection from "../../components/aboutSection/AboutSection";
import Footerr from "../../components/footer/Footerr";
import NavigationBars from "../../components/navigation/NavigationBars";
import Teacher from "../../components/teacher/Teacher";

function About() {
  return (
    <>
      <NavigationBars />
      <AboutSection/>
      <Teacher/>
      {/* <Testimoni/> */}
      <Footerr/>
    </>
  );
}

export default About;
