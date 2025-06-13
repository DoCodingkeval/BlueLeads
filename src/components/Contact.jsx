import React from "react";

const Contact = () => {
  return (
    <section className="contact-section padding text-white">
      <div className="custom-shape-divider-top-1749722384">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container mt-5 pt-5">
        <h1 className="cmn-heading text-center">Contact Us</h1>
        <hr className="w-25 mx-auto" />
        <div className="container d-flex justify-content-center mt-5 py-4">
          <div className="form-section col-lg-6">
            <form>
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="" className="form-label">
                    First name
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mb-3">
                  <label htmlFor="" className="form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" />
                  We'll never share your email with anyone else.
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" rows="6"></textarea>
                </div>
              </div>
              <button className="btn btn-primary px-3 py-2 mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
