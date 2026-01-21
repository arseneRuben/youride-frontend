const services = [
  { icon: 'flaticon-route', title: 'Multiple Routes' },
  { icon: 'flaticon-online-booking', title: 'Easy Booking' },
  { icon: 'flaticon-rent', title: 'Affordable Prices' },
  { icon: 'flaticon-customer-support', title: '24/7 Support' },
];

const Services = () => {
  return (
    <section className="ftco-section services-section">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-3 d-flex">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="icon mb-3">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="heading">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
