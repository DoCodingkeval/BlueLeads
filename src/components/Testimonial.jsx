import { Container, Row } from "react-bootstrap";
import User from "./User";
import { TestimonialData } from "./Data";
import "bootstrap-icons/font/bootstrap-icons.css";

const Testimonial = () => {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const UserAllData = chunkArray(TestimonialData, 3);

  return (
    <>
      <Container className="testimonial-section mb-5 pb-5" id="testimonials">
        <h1 className="cmn-heading text-center text-capitalize text-white mt-3 mt-lg-5 pt-lg-5 mb-5 mb-md-0">
          What client say <br /> about us
          <hr className="w-25 mx-auto" />
        </h1>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            {UserAllData.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {UserAllData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5">
                    {item.map((item, index) => (
                      <User
                        key={index}
                        imgsrc={item.imgsrc}
                        name={item.user_name}
                        review={item.user_review}
                        rating={item.rating}
                      />
                    ))}
                  </Row>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </>
  );
};

export default Testimonial;
