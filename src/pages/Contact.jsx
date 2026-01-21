import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <>

      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread">Contact Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home <i className="ion-ios-arrow-forward"></i></a>
                </span>
                <span>Contact <i className="ion-ios-arrow-forward"></i></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

    </>
  );
};

export default Contact;
