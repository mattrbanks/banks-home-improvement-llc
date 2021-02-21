import React from "react";
import { Link } from "gatsby";

const ServicesComp = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center mx-4">
        <div className="h-8 w-8 bg-red-800 mt-9 mr-2"></div>
        <p className="text-black font-bold text-5xl my-6">Services We Offer</p>
      </div>
      <div className="block lg:flex lg:justify-evenly my-6 mx-auto sm:w-1/2 lg:w-full lg:mx-6">
        <Link to="/service1">
          <div className="max-w-xl w-full lg:flex shadow-xl mb-8">
            <div
              className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/IMG_3971001.jpg?raw=true')",
              }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* <p className="text-sm text-grey-dark flex items-center">
                <svg
                  className="text-grey w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
                <div className="text-black font-bold text-xl mb-2">
                  Residential Cleanouts
                </div>
                <p className="text-grey-darker text-base">
                  In addition to junk removal, we clean the entire home,
                  especially if it's being prepared to go on the market. We work
                  with mortgage brokers as well as private citizens who are
                  selling their homes.
                </p>
              </div>
              {/* <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div> */}
            </div>
          </div>
        </Link>

        <Link to="/service2">
          <div className="max-w-xl w-full lg:flex shadow-xl mb-8">
            <div
              className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/image11.jpeg?raw=true')",
              }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* <p className="text-sm text-grey-dark flex items-center">
                <svg
                  className="text-grey w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
                <div className="text-black font-bold text-xl mb-2">
                  Maintenance
                </div>
                <p className="text-grey-darker text-base">
                  We are happy to contract with the party involved to maintain
                  the property and the home itself while it's vacant. We can
                  also winterize the home if it will be vacant for some time.
                </p>
              </div>
              {/* <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div> */}
            </div>
          </div>
        </Link>
      </div>

      <div className="block lg:flex lg:justify-evenly my-6 mx-auto sm:w-3/4 lg:w-full lg:mx-6">
        <Link to="/service3">
          <div className="max-w-xl w-full lg:flex shadow-xl mb-8">
            <div
              className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/image2(1).jpeg?raw=true')",
              }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* <p className="text-sm text-grey-dark flex items-center">
                <svg
                  className="text-grey w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
                <div className="text-black font-bold text-xl mb-2">
                  Limited Moving
                </div>
                <p className="text-grey-darker text-base">
                  We do some limited moving depending on the job. We are not a
                  moving company but we can move some household items and
                  furniture. We do not move entire homes.
                </p>
              </div>
              {/* <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div> */}
            </div>
          </div>
        </Link>

        <Link to="/service4">
          <div className="max-w-xl w-full lg:flex shadow-xl mb-8">
            <div
              className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/image3_1.jpeg?raw=true')",
              }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* <p className="text-sm text-grey-dark flex items-center">
                <svg
                  className="text-grey w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
                <div className="text-black font-bold text-xl mb-2">
                  Landscaping
                </div>
                <p className="text-grey-darker text-base">
                  We do mowing, seeding, leaf removal, tree/bush removal,
                  raking, etc. We also do debris removal from inside or outside
                  the home. There are additional fees if it involves hazardous
                  waste like motor oil, paint cans, insulation, etc.
                </p>
              </div>
              {/* <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div> */}
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ServicesComp;
