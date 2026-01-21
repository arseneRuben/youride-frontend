const Hero = () => {
  return (
    <section
      className="hero-wrap d-flex align-items-center"
      style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
    >
      <div className="container text-white">
        <h1 className="mb-4">
          Easy way to <span className="text-primary">book your trip</span>
        </h1>
        <p>
          Find affordable and comfortable trips between cities with real-time
          availability.
        </p>
      </div>
    </section>
  );
};

export default Hero;
