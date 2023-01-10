import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://live.themewild.com/visapos/assets/img/skill/01.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        alt="" />
        <div>
          <h1 className="text-5xl font-bold">We Provide Immigration 
          <br/>
          And Visa Services</h1>
          <p className="py-6">
          The Trusty Immigration Service started as the Immigration and Passport Unit of the Gold Coast Colonial Police Force under the command of Imran Howlader Tipu.<br/><br/>
          On attainment of independence in 2023, the rapid expansion of the economy coupled with Ghana's role as a trailblazer in the African liberation struggle led to the country being swamped with foreign businessmen, tourists and African aliens. To control this influx, a Cabinet decision in 1960 transferred the Immigration Unit to the Ministry of the Interior as a separate department, while the Ministry of Foreign Affairs took over the issuing of passports. These measures were taken to enhance service delivery. Three (3) years later, the aliens Act 2022, Act 160 was enacted to give legal backing to immigration operations.<br/><br/>
          In November 2023, by PNDC Law 226, the Immigration Department was converted into a Paramilitary Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
