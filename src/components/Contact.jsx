import React from "react";

const Contact = () => {
  return (
    <div className="container pt-2">
      <section className="contact-section padding text-white" id="contact">
        <h1 className="cmn-heading text-center pt-5 pt-md-0">Contact Us</h1>
        <hr className="w-25 mx-auto" />
        <div className="container d-flex justify-content-center mt-5 py-4">
          <div className="form-section col col-lg-6">
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
      </section>
    </div>
  );
};

export default Contact;
