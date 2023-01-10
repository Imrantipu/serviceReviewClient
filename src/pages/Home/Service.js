// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import FacilityService from "../FacilityService/FacilityService";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import FacilityService from "./FacilityService";

const Service = () => {
  const singleService = useLoaderData();
  console.log(singleService.facility);
  const { _id, img, title, description } = singleService;
  const facilityServices = singleService.facility;

  return (
    <div>
      <section className="w-2/3 mx-auto">
        <div className="card w-auto bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" className="rounded-xl" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">{title}</h2>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-5 bg-base-200">
        <p className="font-bold text-center text-red-700 mt-5 text-2xl">TESTIMONIALS</p>
        <h3 className="text-5xl font-bold text-center">
          What Client Say's?
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {facilityServices.map((faceService) => (
            <FacilityService
              key={faceService._id}
              faceService={faceService}
            ></FacilityService>
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center mt-5">
        <Link to={`/checkout/${_id}`}>
          <button className="btn  btn-primary">Add Review</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
