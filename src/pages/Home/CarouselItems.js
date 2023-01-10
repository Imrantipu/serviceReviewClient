import React from "react";
import "./CarouselItems.css";
import { Link } from "react-router-dom";
const CarouselItems = ({ caroData }) => {
  const { id, prev, next, img } = caroData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-full">
      <div className="carousel-img w-full h-full">
        <img src={img} className="w-full h-full" alt=" " />
      </div>

      <div className="absolute transform -translate-y-1/2 w-5/5 left-24 top-2/4 text-center">
        <h3 className="text-3xl font-bold text-yellow-200 text-center">
          Best Visa Consulting Agency
        </h3>
        <h2 className="text-4xl font-bold text-lime-50 text-center">
          We Are Trusted Visa And
          <br />
          Emmigration Agency.
        </h2>
        <p className="font-bold text-center mt-2 text-base-100 text-2xl">
          Immigration consultants assist clients with completing documentation
          and acquiring all permits needed to facilitate their move to another
          country.
        </p>
        <Link to="/about">
          <button className="btn btn-secondary mt-4 mr-5">About Us</button>
        </Link>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItems;
