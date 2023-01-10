import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from './Carousel';
import ServiceData from './ServiceData';

const Home = () => {
    const servicesData = useLoaderData();
    return (
        <div>
            <Carousel></Carousel>
            <section >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {servicesData.map((sData) => (
            <ServiceData key={sData._id} sData={sData}></ServiceData>
          ))}
        </div>
        <div className="flex flex-col items-center mt-5">
          <Link to="/services">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary mb-5">
              Show All Services
            </button>
          </Link>
        </div>
      </section>
        </div>
    );
};

export default Home;