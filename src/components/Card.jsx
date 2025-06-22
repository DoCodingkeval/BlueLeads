import { RiArrowRightLine } from "react-icons/ri";

const Card = (props) => {
  return (
    <>
      <div className="col pt-lg-5">
        <div className="card py-lg-5 border-0">
          <img
            src={props.imgsrc}
            loading="eager"
            decoding="async"
            className="pt-3 img-fluid w-50 mx-auto"
            alt="link img"
          />
          <div className="card-body">
            <h5 className="card-title pt-2 pt-lg-0">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button className="btn mt-3">
              <a href="">
                <RiArrowRightLine size={25} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
