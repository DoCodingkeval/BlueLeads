import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import User from "./User";
import { TestimonialData } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="container testimonial-section" id="testimonials">
        <h1 className="cmn-heading text-center text-capitalize text-white mt-3 mb-5 mb-md-0">
          What client say <br /> about us
          <hr className="w-25 mx-auto" />
        </h1>
        <div className="slider-container">
          <Slider {...settings}>
            {TestimonialData.map((item, index) => (
              <div className="container">
                <div className="row align-items-center g-5">
                  <User
                    key={index}
                    imgsrc={item.imgsrc}
                    name={item.user_name}
                    review={item.user_review}
                    star={item.stars}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
