const FourCards = (props) => {
  return (
    <>
      <div className="col">
        <div className="card text-white">
          <div className="row row-cols-md-2 row-cols-lg-1 g-md-5 align-items-center">
            <div className="col-md-4">
              <picture>
                <img
                  src={props.imgsrc}
                  className="img-fluid d-md-block d-none mx-lg-auto ms-md-4"
                  alt="phone img"
                />
              </picture>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h5 className="fw-bolder mb-3">{props.title}</h5>
                </div>
                <div className="card-text">
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourCards;
