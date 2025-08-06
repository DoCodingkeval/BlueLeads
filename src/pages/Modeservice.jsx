import { Container } from "react-bootstrap";
import { DataCards } from "../components/Data";
import Online from "../components/Online";

const Modeservice = () => {
  return (
    <>
      <Container className="online-section text-white mt-md-5" id="growth">
        <h1 className="cmn-heading text-center">
          Generating New Customers Via <br /> Online Mode
          <hr className="w-25 mx-auto" />
        </h1>
        {DataCards.map((item, index) => {
          return (
            <div
              key={index}
              className="row g-0 row-cols-md-1 row-cols-lg-2 g-5 mt-3 pt-lg-5 mt-lg-5 align-items-center"
            >
              <Online
                imgsrc={item.imgsrc}
                title={item.card_title}
                description={item.card_description}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Modeservice;
