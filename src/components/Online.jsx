import React from "react";

const Online = (props) => {
  return (
    <>
      <div className="col-md-6">
        <img src={props.imgsrc} className="img-fluid" alt="" />
      </div>
      <div className="col-md-6">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Online;
