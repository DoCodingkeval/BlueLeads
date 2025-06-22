import Card from "./Card";
import { ServiceCards } from "./Data";

const Service = () => {
  return (
    <>
      <section
        className="container text-center service-section mt-md-5"
        id="solutions"
      >
        <h1 className="cmn-heading">
          what we will do for <br /> your business
          <hr className="w-25 mx-auto" />
        </h1>
        <div className="row row-cols-1 row-cols-lg-3 mt-4 g-5 d-flex align-items-center justify-content-center">
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
      </section>
    </>
  );
};

export default Service;
