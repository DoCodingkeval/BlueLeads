const FourCards = (props) => {
  return (
    <>
      <div className="col">
        <div className="content d-flex align-items-center justify-content-center shadow">
          <div className="col-md-4">
            <img
              src={props.imgsrc}
              loading="eager"
              decoding="async"
              className="img-fluid d-md-block d-none"
              alt="phone img"
            />
          </div>
          <div className="col-md-8 mini-padding">
            <h5 className="mb-3 fw-bolder">{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourCards;
