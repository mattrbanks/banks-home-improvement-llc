import React from "react";

const ServicesComp = () => {
  return (
    <React.Fragment>
      <div>
        <p className="text-black font-bold text-5xl my-6 text-center">
          Services we offer
        </p>
      </div>
      <div className="flex justify-around my-6 mx-6">
        <div className="max-w-md w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://tailwindcss.com/img/card-left.jpg')",
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

        <div className="max-w-md w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
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
                I will be glad to contract with the party involved to maintain
                the property and the home itself while it's vacant. I can also
                winterize the home if it will be vacant for some time. I hope
                that clarifies the types of contracts I am looking for.
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
      </div>

      <div className="flex justify-around my-6 mx-6">
        <div className="max-w-md w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
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
                I do some moving as well, depending on the job. I am not a
                moving company but since I do debris removal, I can also move
                some household items and furniture, but, I am not moving an
                entire home if I can avoid it.
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

        <div className="max-w-md w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
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
                We do mowing, seeding, leaf removal, tree and bush removal,
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
      </div>
    </React.Fragment>
  );
};

export default ServicesComp;
