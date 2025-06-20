import hero from "../assets/hero.mp4";
import { motion, useInView } from "motion/react";

const Hero = () => {
  const divVariant = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="container text-center">
        <motion.section className="heroSection padding" id="home">
          <div className="row align-items-center" style={{ height: "60vh" }}>
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
                Reach the right customers through targeted strategies that drive
                engagement and sales. From SEO to paid ads, we bring you leads
                that matter — so you can grow faster, smarter.
              </p>
              <a
                href="#"
                className="btn link mt-2 mt-md-3 mx-auto mx-lg-0 fw-bold"
              >
                Let's Talk
              </a>
            </motion.div>
            <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-lg-end order-0">
              <video
                src={hero}
                preload="none"
                autoPlay
                loop
                muted
                className="img-fluid rounded-4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Hero;
