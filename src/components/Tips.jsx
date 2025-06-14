import React from "react";
import { RiBookOpenFill } from "react-icons/ri";
import webdev from "../assets/webdev.mp4";
import freelancing from "../assets/freelancing.mp4";
import graphicdesigner from "../assets/graphicdesigner.mp4";
import wordpress from "../assets/wordpress.mp4";

const Tips = () => {
  return (
    <section className="tips-section padding" id="insights">
      <div className="container">
        <h1 className="cmn-heading text-center text-capitalize">
          Tips and Tricks From <br /> Our Exparts
          <hr className="w-25 mx-auto" />
        </h1>
        <div className="d-flex mt-5 py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
            <div className="col">
              <div className="card p-2">
                <div className="row g-md-5">
                  <div className="col-lg-12">
                    <video
                      src={webdev}
                      autoPlay
                      loop
                      muted
                      className="img-fluid mx-auto d-md-block d-none"
                    ></video>
                  </div>
                  <div className="col-lg-12">
                    <div className="card-body">
                      <div className="text-gray d-flex justify-content-between mb-3">
                        <h6 className="d-flex">
                          <RiBookOpenFill />
                          &nbsp;: 5000
                        </h6>
                        <span>March 3, 2020</span>
                      </div>
                      <h5 className="card-title">Web Development</h5>
                      <p className="card-text mb-4 fw-light">
                        Discover the power of modern websites! Learn to build
                        responsive, fast-loading, and user-friendly sites.
                        Master HTML, CSS, JavaScript, and cutting-edge
                        frameworks.
                      </p>
                      <button className="btn btn-dark text-white px-4 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-2">
                <div className="row g-md-5">
                  <div className="col-lg-12">
                    <video
                      src={freelancing}
                      autoPlay
                      loop
                      muted
                      className="img-fluid mx-auto d-md-block d-none"
                    ></video>
                  </div>
                  <div className="col-lg-12">
                    <div className="card-body">
                      <div className="text-gray d-flex justify-content-between mb-3">
                        <h6 className="d-flex">
                          <RiBookOpenFill />
                          &nbsp;: 5000
                        </h6>
                        <span>March 3, 2020</span>
                      </div>
                      <h5 className="card-title">Freelancing</h5>
                      <p className="card-text mb-4 fw-light">
                        Unlock the freedom to work on your terms. Build a
                        portfolio, attract clients, and manage projects with
                        ease. Perfect for writers, developers, and creatives
                        alike.
                      </p>
                      <button className="btn btn-dark text-white px-4 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-2">
                <div className="row g-md-3">
                  <div className="col-lg-12">
                    <video
                      src={graphicdesigner}
                      autoPlay
                      loop
                      muted
                      className="img-fluid mx-auto d-md-block d-none"
                    ></video>
                  </div>
                  <div className="col-lg-12">
                    <div className="card-body">
                      <div className="text-gray d-flex justify-content-between mb-3">
                        <h6 className="d-flex">
                          <RiBookOpenFill />
                          &nbsp;: 5000
                        </h6>
                        <span>March 3, 2020</span>
                      </div>
                      <h5 className="card-title">Graphic Designer</h5>
                      <p className="card-text mb-4 fw-light">
                        Transform ideas into visually stunning designs. Master
                        tools like Photoshop, Illustrator, and Figma. Create
                        brand identities, marketing assets, and digital art.
                      </p>
                      <button className="btn btn-dark text-white px-4 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-2">
                <div className="row g-md-3">
                  <div className="col-lg-12">
                    <video
                      src={wordpress}
                      autoPlay
                      loop
                      muted
                      className="img-fluid mx-auto d-md-block d-none"
                    ></video>
                  </div>
                  <div className="col-lg-12">
                    <div className="card-body">
                      <div className="text-gray d-flex justify-content-between mb-3">
                        <h6 className="d-flex">
                          <RiBookOpenFill />
                          &nbsp;: 5000
                        </h6>
                        <span>March 3, 2020</span>
                      </div>
                      <h5 className="card-title">Wordpress Developer</h5>
                      <p className="card-text mb-4 fw-light">
                        Build powerful websites using WordPress with ease. Learn
                        theme customization, plugins, and SEO optimization.
                        Ideal for blogs, e-commerce, and business sites.
                      </p>
                      <button className="btn btn-dark text-white px-4 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
