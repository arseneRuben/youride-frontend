import AboutServices from "../components/about/AboutServices";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import AboutStory from "../components/about/AboutStory";
import HeroSection from "../components/common/HeroSection";

const About = () => {
  return (
    <>

       <HeroSection
        title="Auth"
        current="Auth page"
        image="/images/bg_2.jpg"
        />

      <AboutServices />
      <HowItWorks />
      <Testimonials />
      <AboutStory />

    </>
  );
};

export default About;
