import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import user from "../assets/user.jpeg";
import user1 from "../assets/user-1.jpg";
import user2 from "../assets/user-2.jpg";
import user3 from "../assets/user-3.jpg";
import user4 from "../assets/user-4.jpg";
import user5 from "../assets/user-5.jpg";
import user6 from "../assets/user-6.jpg";
import user7 from "../assets/user-7.jpg";
import user8 from "../assets/user-8.jpg";
import { RiStarSFill, RiStarLine, RiStarHalfFill, RiStarHalfLine } from "react-icons/ri";

const Testimonial = () => {
  return (
    <section className="testimonial-section padding" id="testimonials">
      <div className="container">
        <h1 className="cmn-heading text-center text-capitalize text-white mt-3 mb-5 mb-md-0">
          What client say <br /> about us
        </h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="container p-lg-5">
              <div className="row row-cols-md-2 row-cols-lg-3 d-flex align-items-center justify-content-center g-5">
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img src={user} className="img-fluid mx-4" alt="user" />
                    <div className="card-body">
                      <h5 className="card-title">Angelina Thapa</h5>
                      <p className="card-text mt-3">
                        “This platform exceeded my expectations. The interface
                        is super clean, and I love how easily I can manage
                        everything in one place!”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarLine />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img src={user1} loading="lazy" className="img-fluid mx-4" alt="user" />
                    <div className="card-body">
                      <h5 className="card-title">Ravi Sharma</h5>
                      <p className="card-text mt-3">
                        “I’ve used many services, but this one stands out. Their
                        support team is incredibly responsive, and I’m seeing
                        great results!”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user2}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Daniel Brooks</h5>
                      <p className="card-text mt-3">
                        “What impressed me most is the attention to detail.
                        Everything works smoothly and the experience feels truly
                        premium.”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarHalfFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container p-lg-5">
              <div className="row row-cols-md-2 row-cols-lg-3 d-flex align-items-center justify-content-center g-5">
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user3}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Priya Mehra</h5>
                      <p className="card-text mt-3">
                        “Fantastic service and beautiful design! I’ve
                        recommended it to all my colleagues.”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user4}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Kunal Desai</h5>
                      <p className="card-text mt-3">
                        “The experience was smooth from start to finish.
                        Everything worked exactly how I hoped.”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarLine />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user5}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Ritika Sinha</h5>
                      <p className="card-text mt-3">
                        “Super easy to use and very effective. I’m genuinely
                        impressed with the results.”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container p-lg-5">
              <div className="row row-cols-md-2 row-cols-lg-3 d-flex align-items-center justify-content-center g-5">
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user6}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Arjun Kulkarni</h5>
                      <p className="card-text mt-3">
                        “Clean, intuitive, and highly responsive. Great
                        attention to detail in design and user experience.”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user7}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Sneha Rathi</h5>
                      <p className="card-text mt-3">
                        “I loved the vibrant aesthetics and the smooth
                        functionality. Definitely exceeded my expectations!”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarLine />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col p-lg-5">
                  <div
                    className="card py-3 text-center bg-dark text-white"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={user8}
                      loading="lazy"
                      className="img-fluid mx-4 rounded-2"
                      alt="user"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Markus Weber</h5>
                      <p className="card-text mt-3">
                        “Reliable, well-built, and super helpful. I appreciate
                        how easy it was to get started.”
                      </p>
                      <div className="star">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarHalfLine />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
