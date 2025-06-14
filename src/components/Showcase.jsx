import phone from "../assets/phone.gif";

const Showcase = () => {
  return (
    <section className="steps-section py-5" id="process">
      <div className="container mb-4 mb-md-0 mb-lg-0">
        <div className="row row-cols-lg-2 row-cols-1 text-white p-3 p-md-0">
          <div className="col">
            <img
              src={phone}
              className="img-fluid w-75 mx-auto mx-lg-0 d-block"
              alt="phone img"
            />
          </div>
          <div className="col mt-2 mt-lg-5">
            <h1 className="fw-bold">
              Steps to Build A <br /> Successful Digital Product{" "}
            </h1>
            <p className="mt-3 mt-md-4">
              Creating a digital product that stands out requires more than just
              an idea — it takes strategy, design thinking, and a user-first
              mindset. From understanding your audience to building a scalable
              solution, we guide you through every step of the journey. Whether
              you're launching a mobile app, SaaS platform, or web tool, our
              proven process ensures your product is built to succeed in today’s
              digital landscape.
            </p>
            <a href="#" className="btn btn-primary link mt-4 mx-auto">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
