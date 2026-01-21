const testimonials = [
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image: "/images/person_1.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Interface Designer",
    message:
      "There live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    image: "/images/person_2.jpg",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    message:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "/images/person_3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Happy Clients</h2>
          </div>
        </div>

        <div className="row">
          {testimonials.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="testimony-wrap text-center py-4 pb-5">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="text pt-4">
                  <p className="mb-4">{item.message}</p>
                  <p className="name">{item.name}</p>
                  <span className="position">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
