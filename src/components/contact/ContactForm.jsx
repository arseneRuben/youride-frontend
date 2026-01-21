const ContactForm = () => {
  return (
    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-12 mb-4">
            <h2 className="h3">Contact Information</h2>
          </div>
          <div className="w-100"></div>

          <div className="col-md-3 d-flex">
            <div className="info bg-light p-4">
              <p><span className="icon icon-map-marker"></span> 203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>

          <div className="col-md-3 d-flex">
            <div className="info bg-light p-4">
              <p><span className="icon icon-phone"></span> <a href="tel://1234567920">+2 392 3929 210</a></p>
            </div>
          </div>

          <div className="col-md-3 d-flex">
            <div className="info bg-light p-4">
              <p><span className="icon icon-envelope"></span> <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
            </div>
          </div>

          <div className="col-md-3 d-flex">
            <div className="info bg-light p-4">
              <p><span className="icon icon-globe"></span> <a href="#">yourdomain.com</a></p>
            </div>
          </div>
        </div>

        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form className="bg-light p-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email" />
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>

              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>

              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>

          </div>

          <div className="col-md-6 d-flex">
            <div className="bg-white">
                <iframe
                    title="company-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199673202133!2d-122.41941518468328!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a6d0bdf%3A0xf9f0e5d4bdb7b6e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1610000000000!5m2!1sen!2sca"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
