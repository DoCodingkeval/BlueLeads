const FourCards = (props) => {
  return (
    <>
      <div className="col-12 col-md-6">
        <div className="content d-flex align-items-center justify-content-center shadow">
          <div className="col-0 col-md-4">
            <img
              src={props.imgsrc}
              loading="eager"
              decoding="async"
              className="img-fluid d-md-block d-none"
              alt="phone img"
            />
          </div>
          <div className="col-12 col-md-8 px-2">
            <h5 className="fw-bolder">{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourCards;
