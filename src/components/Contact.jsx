const Contact = () => {
  return (
    <>
      <section
        className="container contact-section text-white pt-5 mt-md-5"
        id="contact"
      >
        <h1 className="cmn-heading text-center pt-5 pt-md-0">Contact Us</h1>
        <hr className="w-25 mx-auto" />
        <div className="container d-flex justify-content-center mt-5 py-4">
          <div className="form-section col col-lg-8 mb-5">
            <form>
              <div className="row">
                <div className="col">
                  <input type="text" placeholder="First name" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <input type="text" placeholder="Last name" />
                </div>
                <div className="col-12">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea placeholder="Message" rows="6"></textarea>
                </div>
              </div>
              <button className="btn link px-5 py-2 mt-3">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
