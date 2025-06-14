import phone from "../assets/phone.gif";
import influence from "../assets/influence.mp4";
import content from "../assets/content.mp4";
import referral from "../assets/referral.mp4";

const Modeservice = () => {
  return (
    <section className="online-section padding" id="growth">
      <div className="container">
        <h1 className="cmn-heading text-center">
          Generating New Customers Via <br /> Online Mode
          <hr className="w-25 mx-auto" />
        </h1>
        <div className="row row-cols-1 row-cols-lg-2 g-5 mt-3 mt-lg-5 mb-5">
          <div className="col">
            <div className="d-flex align-items-center justify-content-center px-lg-3 py-4 shadow">
              <img
                src={phone}
                loading="lazy"
                className="img-fluid d-md-block d-none px-3"
                style={{ width: "13rem" }}
                alt="phone img"
              />
              <div className="mini-padding">
                <h5 className="mb-3 fw-bolder">Social Media Advertising </h5>
                <p>
                  Reach a wider audience by creating engaging ads on platforms
                  like Facebook, Instagram and LinkedIn. Target specific
                  demographics to connect with potential customers interested in
                  your services.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center py-4 shadow">
              <video
                src={influence}
                preload="none"
                autoPlay
                loop
                muted
                className="img-fluid d-md-block d-none"
              ></video>
              <div className="mini-padding">
                <h5 className="mb-3 fw-bolder">Influencer Marketing</h5>
                <p>
                  Partner with influential individuals or bloggers in your
                  industry to tap into their audience. Through sponsored posts
                  or endorsements, you can generate interest and attract new
                  customers to your online channels.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center px-lg-3 py-4 shadow">
              <video
                src={content}
                preload="none"
                autoPlay
                loop
                muted
                className="img-fluid d-md-block d-none"
              ></video>
              <div className="mini-padding">
                <h5 className="mb-3 fw-bolder">Content Marketing</h5>
                <p>
                  Publish valuable and optimized content on your website's blog.
                  Attract organic traffic, position your brand as an authority,
                  and encourage visitors to engage and make a purchase.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center px-lg-3 py-4 shadow">
              <video
                src={referral}
                preload="none"
                autoPlay
                loop
                muted
                className="img-fluid d-md-block d-none"
              ></video>
              <div className="mini-padding">
                <h5 className="mb-3 fw-bolder">Referral Programs</h5>
                <p>
                  Implement a customer referral program. Incentivize existing
                  customers to refer others with rewards like discounts or
                  loyalty points. Word-of-mouth marketing helps acquire new
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modeservice;
