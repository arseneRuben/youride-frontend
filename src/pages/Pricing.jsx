import PricingTable from "../components/pricing/PricingTable";


const Pricing = () => {
  return (
    <>

      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home <i className="ion-ios-arrow-forward"></i></a>
                </span>
                <span>Pricing <i className="ion-ios-arrow-forward"></i></span>
              </p>
              <h1 className="mb-3 bread">Pricing</h1>
            </div>
          </div>
        </div>
      </section>

      <PricingTable/>

    </>
  );
};

export default Pricing;
