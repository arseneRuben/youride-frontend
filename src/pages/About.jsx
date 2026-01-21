import AboutServices from "../components/about/AboutServices";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import AboutStory from "../components/about/AboutStory";

const About = () => {
  return (
    <>

      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home <i className="ion-ios-arrow-forward"></i></a>
                </span>
                <span>About us <i className="ion-ios-arrow-forward"></i></span>
              </p>
              <h1 className="mb-3 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <AboutServices />
      <HowItWorks />
      <Testimonials />
      <AboutStory />

    </>
  );
};

export default About;
