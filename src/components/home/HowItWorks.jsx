const steps = [
  {
    step: "01",
    title: "Pick Destination",
    description: "Choose your departure and destination city.",
    icon: "flaticon-route",
  },
  {
    step: "02",
    title: "Select Term",
    description: "Choose a convenient date and time.",
    icon: "flaticon-select",
  },
  {
    step: "03",
    title: "Enjoy The Ride",
    description: "Sit back and enjoy your journey.",
    icon: "flaticon-review",
  },
];

const HowItWorks = () => {
  return (
    <section className="ftco-section services-section img"  style={{ backgroundImage: ` url(images/bg_2.jpg)` }} >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section heading-section-white">
            <span className="subheading">Work flow</span>
            <h2 className="mb-3">How it works</h2>
          </div>
        </div>

        <div className="row">
          {steps.map((item, index) => (
            <div key={index} className="col-md-3 d-flex align-self-stretch">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className={item.icon}></span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
