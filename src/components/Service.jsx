import link from "../assets/link.gif";
import speaker from "../assets/speaker.gif";
import seo from "../assets/seo.gif";
import {
  RiArrowDownBoxFill,
  RiArrowRightBoxLine,
  RiArrowRightCircleLine,
  RiArrowRightLine,
} from "react-icons/ri";

const Service = () => {
  return (
    <>
      <section className="service-section padding py-5 mt-5" id="solutions">
        <div className="container mt-5 mb-5 text-center">
          <h1 className="cmn-heading">
            what we will do for <br /> your business
            <hr className="w-25 mx-auto" />
          </h1>
          <div className="row row-cols-1 row-cols-lg-3 mt-4 g-5 d-flex align-items-center justify-content-center">
            <div className="col">
              <div
                className="card border-0 card-odd"
              >
                <img
                  src={link}
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
              <div
                className="card border-0 shadow-lg"
              >
                <img
                  src={speaker}
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
              <div
                className="card border-0 card-odd"
              >
                <img src={seo} className="pt-3 img-fluid w-50 mx-auto" alt="seo img" />
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
        </div>
      </section>
    </>
  );
};

export default Service;
