import marketing from "../assets/marketing.png";

const Showcase = () => {
  return (
    <>
      <section className="container steps-section" id="process">
        <div className="row row-cols-lg-2 row-cols-1 text-white p-3 p-md-0">
          <div className="col">
            <img
              src={marketing}
              loading="eager"
              decoding="async"
              className="img-fluid w-75 mx-auto d-block"
              alt="phone img"
            />
          </div>
          <div className="col px-4 px-md-5 mt-2 mt-lg-5 pb-md-4">
            <h1 className="fw-bold">
              Steps to Build A <br /> Successful Digital Product
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
            <a href="#" className="btn link mt-4 mx-auto">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
