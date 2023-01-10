import React from "react";
import "./Country.css";
const Country = () => {
  return (
    <div >
      <div className="container">
        <p className="text-2xl text-rose-400 text-center">Country</p>
        <h2 className="text-3xl font-bold text-green-500 text-center">
          Choose Your Country
        </h2>
        <div className="country-style mt-5 mb-10">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://live.themewild.com/visapos/assets/img/country/03.jpg"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">United Kingdom</h2>
              <p className="text-white">
                This briefing provides an overview of attitudes toward
                immigration in Britain. The discussion focuses on four
                questions. First, do people favour or oppose immigration to the
                UK and is it seen as one of the most important issues facing the
                country? Secondly, are attitudes changing over time? Third, how
                does the UK compare to its European neighbours in its views? And
                fourth, in light of the public debate around Brexit, how divided
                are we over attitudes to immigration?
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://live.themewild.com/visapos/assets/img/country/01.jpg"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">United States</h2>
              <p className="text-white">
                The legal argument against such a move is overwhelming: It would
                reverse about 1,000 years of Anglo‐​American common law and
                violate the 14th Amendment to the U.S. Constitution. Even worse,
                experience here and in Europe shows that ending birthright
                citizenship would limit how well immigrants and their
                descendants assimilate and become Americans.
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://live.themewild.com/visapos/assets/img/country/04.jpg"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">Canada</h2>
              <p className="text-white">
                Canada has built a reputation over the last half century of
                welcoming immigrants and valuing multiculturalism. Foreign-born
                people make up about one-fifth of Canada’s population—one of the
                highest ratios for industrialized Western countries. Immigrants
                have helped the country counter aging demographics and fuel
                economic growth. In recent years, Canada has become an even more
                attractive destination for immigrants as the United States,
                under the leadership of President Donald Trump, curtailed
                several immigration programs, including those for refugees,
                asylum seekers, and temporary workers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
