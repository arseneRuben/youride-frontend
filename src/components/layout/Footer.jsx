import '../../assets/scss/main.scss';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">

          {/* About */}
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">YouRide</h2>
              <p>
                Affordable and reliable intercity transportation.
                Book your seat easily and travel with comfort.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="/" className="py-2 d-block">Home</a></li>
                <li><a href="/contact" className="py-2 d-block">Contact</a></li>
                <li><a href="/booking" className="py-2 d-block">Booking</a></li>
                <li><a href="/admin" className="py-2 d-block">Admin</a></li>

              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Support</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">FAQ</a></li>
                <li><a href="#" className="py-2 d-block">Terms & Conditions</a></li>
                <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have Questions?</h2>
              <ul className="list-unstyled">
                <li>
                  <span className="icon icon-map-marker"></span>
                  <span className="text">Ontario, Canada</span>
                </li>
                <li>
                  <span className="icon icon-phone"></span>
                  <span className="text">+1 000 000 0000</span>
                </li>
                <li>
                  <span className="icon icon-envelope"></span>
                  <span className="text">support@youride.com</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              © {new Date().getFullYear()} YouRide. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
