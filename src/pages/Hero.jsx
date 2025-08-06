import { Container, Row } from "react-bootstrap";
import hero from "../assets/hero/hero.svg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Hero = () => {
  const divVariant = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Container
        as="div"
        className="heroSection text-center d-flex justify-content-center align-items-center"
        id="home"
      >
        <Row className="mt-lg-5 pt-lg-4">
          <motion.div
            variants={divVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.3 }}
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
            <Link
              to="/"
              className="btn link mt-2 mt-md-3 mx-auto mx-lg-0 fw-bold"
            >
              Get Started
            </Link>
          </motion.div>
          <div className="col-12 col-lg-6 mb-lg-0 pb-3 text-lg-end order-0">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src={hero}
              loading="lazy"
              className="img-fluid"
              alt="heroimg"
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
