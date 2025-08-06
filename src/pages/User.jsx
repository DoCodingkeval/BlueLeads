const User = (props) => {
  const ratingLogic = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= 1) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (rating > 0) {
        stars.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
      rating -= 1;
    }
    return stars;
  };

  return (
    <>
      <div className="col p-lg-5 mb-5 mx-auto">
        <div className="card py-3 text-center text-white">
          <picture>
            <img src={props.imgsrc} className="img-fluid mx-auto" alt="user" />
          </picture>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text mt-3">{props.review}</p>
            <div className="star">{ratingLogic(props.rating)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
