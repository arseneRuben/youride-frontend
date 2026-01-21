const posts = [
  {
    title: "Why Lead Generation is Key for Business Growth",
    date: "July 24, 2019",
    image: "/images/image_1.jpg",
  },
  {
    title: "Why Lead Generation is Key for Business Growth",
    date: "July 24, 2019",
    image: "/images/image_2.jpg",
  },
  {
    title: "Why Lead Generation is Key for Business Growth",
    date: "July 24, 2019",
    image: "/images/image_3.jpg",
  },
];

const BlogPreview = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>

        <div className="row d-flex">
          {posts.map((post, index) => (
            <div key={index} className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a
                  href="/blog"
                  className="block-20"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></a>
                <div className="text pt-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">{post.date}</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>

                  <h3 className="heading mt-2">
                    <a href="/blog">{post.title}</a>
                  </h3>

                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
