
import ContactForm from "../components/contact/ContactForm";
import HeroSection from "../components/common/HeroSection";

const Contact = () => {
  return (
    <>

       <HeroSection
        title="Car list"
        current="Car list"
        image="/images/bg_1.jpg"
        />

      <ContactForm />

    </>
  );
};

export default Contact;
