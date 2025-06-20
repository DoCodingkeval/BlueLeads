const User = (props) => {
  return (
    <>
      <div className="col p-lg-5">
        <div className="card py-3 text-center text-white">
          <img
            src={props.imgsrc}
            fetchPriority="high"
            loading="lazy"
            className="img-fluid mx-auto"
            alt="user"
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text mt-3">{props.review}</p>
            <div className="star">{props.star}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
