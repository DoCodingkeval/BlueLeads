import hero from "../assets/hero.svg";
import { motion } from "motion/react";

const Hero = () => {
  const divVariant = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.section
        className="container heroSection text-center d-flex justify-content-center align-items-center"
        id="home"
      >
        <div className="row">
          <motion.div
            variants={divVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="center col-md-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start justify-content-center order-1 mt-lg-5 pt-lg-5"
          >
            <h1>
              <span className="fw-bolder">W</span>
              <span className="text-white fw-bold">
                e Collect High
                <br />
                Quality Leads
              </span>
            </h1>
            <p className="mt-md-3 text-lg-start text-gray">
              Reach the right customers through targeted strategies that drive
              engagement and sales. From SEO to paid ads, we bring you leads
              that matter — so you can grow faster, smarter.
            </p>
            <a
              href="#"
              className="btn link mt-2 mt-md-3 mx-auto mx-lg-0 fw-bold"
            >
              Get Started
            </a>
          </motion.div>
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-lg-end order-0">
            <img
              src={hero}
              loading="lazy"
              className="img-fluid mt-5"
              alt="heroimg"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
