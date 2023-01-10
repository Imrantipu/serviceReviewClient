import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceData = ({ sData }) => {
  const { _id, title, img, price, description } = sData;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">
          {description.length > 100 ? (
            <>
              {description.slice(0, 100) + "..."}{" "}
              <Link to={`/service/${_id}`}>
                {" "}
                <button className="btn btn-primary">View Details</button>
              </Link>{" "}
            </>
          ) : (
            description
          )}
        </p>
        <p className="text-white">Price:${price}</p>
      </div>
    </div>
  );
};

export default ServiceData;
