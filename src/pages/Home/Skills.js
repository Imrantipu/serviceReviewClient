import React from "react";

const Skills = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div>
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img
              src="https://live.themewild.com/visapos/assets/img/about/01.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-secondary ">OUR SKILLS</h3>
            <h1 className="text-5xl font-bold">
              We Offers You The Best
              <br />
              Immigration Service
            </h1>
            <p className="py-6">
              We utilize our experience in the Immigration sector to explicitly
              monitor and assess your current opportunity to explore other
              countries. We understand the process required to immigrate and
              employ lawyers who have profound knowledge on the matter. Whether
              it’s immigration to Canada, Australia, Malaysia, Singapore,
              Thailand, United States or United Kingdom we can help you with
              your pursuit.
            </p>
            <div>
              <p className="text-1xl">STUDENT CONSULTENCY</p>
              <progress
                className="progress progress-success w-1/2"
                value="80"
                max="100"
              >
                80%
              </progress>
              <p className="text-1xl">IMMIGRATION CONSULTENCY</p>
              <progress
                className="progress progress-success w-1/2"
                value="60"
                max="100"
              ></progress>
              <p className="text-1xl">TOURIST CONSULTENCY</p>
              <progress
                className="progress progress-success w-1/2"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
