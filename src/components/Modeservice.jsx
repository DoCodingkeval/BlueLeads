import { DataCards } from "./Data";
import FourCards from "./FourCards";

const Modeservice = () => {
  return (
    <>
      <section
        className="container online-section text-white mt-md-5"
        id="growth"
      >
        <h1 className="cmn-heading text-center">
          Generating New Customers Via <br /> Online Mode
          <hr className="w-25 mx-auto" />
        </h1>
        <div className="row row-cols-md-1 row-cols-lg-2 g-5 mt-3 mt-lg-5 mb-5">
          {DataCards.map((item, index) => {
            return (
              <>
                <FourCards
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

export default Modeservice;
