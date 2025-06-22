import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import { ServiceCards } from "./Data";

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
      <motion.section
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container text-center service-section mt-md-5"
        id="solutions"
      >
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
          {ServiceCards.map((item, index) => {
            return (
              <>
                <Card
                  key={index}
                  imgsrc={item.imgsrc}
                  title={item.card_title}
                  description={item.card_description}
                />
              </>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Service;
