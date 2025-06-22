import { useState } from "react";
import FourCards from "./FourCards";
import { TipsCards } from "./Data";

const Tips = () => {
  return (
    <>
      <section
        className="container tips-section text-white pt-5 pb-md-5"
        id="insights"
      >
        <h1 className="cmn-heading text-center text-capitalize">
          Tips and Tricks From <br /> Our Experts
          <hr className="w-25 mx-auto" />
        </h1>
        <div className="d-flex mt-5 py-4 pb-lg-5 mb-lg-4">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            {TipsCards.map((item, index) => {
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
        </div>
      </section>
    </>
  );
};

export default Tips;
