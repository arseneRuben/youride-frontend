import HeroSection from "../components/common/HeroSection";
import PricingTable from "../components/pricing/PricingTable";


const Pricing = () => {
  return (
    <>

       <HeroSection
        title="Pricing"
        current="Pricing"
        image="/images/image_1.jpg"
        />

      <PricingTable/>

    </>
  );
};

export default Pricing;
