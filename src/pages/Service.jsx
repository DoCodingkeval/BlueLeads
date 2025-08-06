import { Container, Row } from "react-bootstrap";
import Card from "../components/Card";
import { ServiceCards } from "../components/Data";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <Container className="text-center service-section mt-md-5" id="solutions">
      <h1 className="cmn-heading">
        what we will do for <br /> your business
        <hr className="w-25 mx-auto" />
      </h1>
      <Row className="row-cols-1 row-cols-lg-3 mt-4 g-5 d-flex align-items-center justify-content-center">
        {ServiceCards.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: item * 0.2,
              }}
              key={item.id}
              className="card"
            >
              <img src={item.imgsrc} alt="image" />
              <h5>{item.card_title}</h5>
              <p>{item.card_description}</p>
            </motion.div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Service;
