const services = [
  { title: "24/7 Car Support", description: "A small river named Duden flows by their place and supplies it with you" },
  { title: "Lots of locations", description: "A small river named Duden flows by their place and supplies it with you" },
  { title: "Reservation", description: "A small river named Duden flows by their place and supplies it with you" },
  { title: "Rental Cars", description: "A small river named Duden flows by their place and supplies it with you" },
];

const AboutServices = () => {
  return (
    <section className="ftco-section services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">Our Services</span>
            <h2 className="mb-2">Our Services</h2>
          </div>
        </div>

        <div className="row d-flex">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon">
                      <span className="flaticon-placeholder"></span>
                    </div>
                    <h3 className="heading mb-0 pl-3">{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
