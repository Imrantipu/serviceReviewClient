import React from "react";

const FacilityService = ({ faceService }) => {
  const { img1, name, details } = faceService;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-80">
          <img src={img1} alt="Shoes" />
        </figure>
        <div className="card-body" style={{ height: "15rem" }}>
          <h2 className="card-title text-white">{name}</h2>
          <p className="text-white">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default FacilityService;
