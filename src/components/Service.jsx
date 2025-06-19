import link from "../assets/link.gif";
import speaker from "../assets/speaker.gif";
import seo from "../assets/seo.gif";
import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
const Service = ({ children, direction = "up", delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 300 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container py-5 mt-5 mb-5 text-center"
      >
        <section className="service-section padding" id="solutions">
          {children}
          <h1 className="cmn-heading">
            what we will do for <br /> your business
            <hr className="w-25 mx-auto" />
          </h1>
          <div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="row row-cols-1 row-cols-lg-3 mt-4 g-5 d-flex align-items-center justify-content-center"
          >
            <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="col"
            >
              <div className="card border-0">
                <img
                  src={link}
                  loading="eager"
                  decoding="async"
                  className="pt-3 img-fluid w-50 mx-auto"
                  alt="link img"
                />
                <div className="card-body">
                  <h5 className="card-title pt-2 pt-lg-0">Link Building</h5>
                  <p className="card-text">
                    Hunky dory barney fanny around up the duff no biggie loo cup
                    of tea jolly good ruddy say arse!
                  </p>
                  <button className="btn mt-3">
                    <a href="">
                      <RiArrowRightLine size={25} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-lg">
                <img
                  src={speaker}
                  loading="eager"
                  decoding="async"
                  className="pt-3 img-fluid w-50 mx-auto"
                  alt="content img"
                />
                <div className="card-body">
                  <h5 className="card-title pt-2 pt-lg-0">Content marketing</h5>
                  <p className="card-text">
                    Hunky dory barney fanny around up the duff no biggie loo cup
                    of tea jolly good ruddy say arse!
                  </p>
                  <button className="btn mt-3">
                    <a href="">
                      <RiArrowRightLine size={25} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <img
                  src={seo}
                  loading="eager"
                  decoding="async"
                  className="pt-3 img-fluid w-50 mx-auto"
                  alt="seo img"
                />
                <div className="card-body">
                  <h5 className="card-title pt-2 pt-lg-0">On Page SEO</h5>
                  <p className="card-text">
                    Hunky dory barney fanny around up the duff no biggie loo cup
                    of tea jolly good ruddy say arse!
                  </p>
                  <button className="btn mt-3">
                    <a href="">
                      <RiArrowRightLine size={25} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Service;
