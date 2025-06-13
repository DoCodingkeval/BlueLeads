import { div } from "motion/react-client";
import herovid from "../assets/hero.mp4";
import { motion } from "motion/react";

const Hero = () => {
  const videoVariants = {
    hidden: { opacity: 0, x: 500 },
    show: { opacity: 1, x: 0 },
  };

  const divVariant = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section className="heroSection padding">
        <div className="container text-center">
          <div className="row align-items-center mt-5">
            <motion.div
              variants={divVariant}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6 }}
              className="center col-md-12 col-lg-6 d-flex flex-column align-items-start justify-content-center order-1"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravi.
              </p>
              <motion.a
                whileHover={{
                  scale: 1.08,
                }}
                href="#"
                className="btn btn-primary link mt-2 mt-md-3 mx-auto mx-lg-0"
              >
                Contact Us
              </motion.a>
            </motion.div>
            <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-lg-end order-0">
              <motion.video
                initial="hidden"
                variants={videoVariants}
                animate="show"
                transition={{
                  duration: 0.6,
                }}
                src={herovid}
                autoPlay
                loop
                muted
                className="img-fluid rounded-5 rounded-lg-5 p-lg-0"
              >
                Your browser does not support the video tag.
              </motion.video>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1749627964">
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
      </section>
    </>
  );
};

export default Hero;
