import React from "react";
import Layout from "../components/layout";

const Service1 = () => {
  return (
    <Layout>
      <div className="block mx-auto w-11/12 lg:w-3/5 my-8 text-2xl">
        <div>
          <div
            className="text-white block w-96 h-40 bg-grey-dark bg-no-repeat bg-center bg-cover"
            title="Real Residential Cleanout Job"
            style={{
              backgroundImage:
                "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/IMG_3971001.jpg?raw=true')",
            }}
          ></div>
        </div>

        <p>Here is where we break down the Residential Cleanouts service.</p>
        <p>Things we will dispose of or do.</p>
        <ul className="space-y-10 ml-16 mt-8 list-decimal text-2xl">
          <li>
            <p>A listed item or service.</p>
          </li>
          <li>
            <p>A listed item or service.</p>
          </li>
          <li>
            <p>A listed item or service.</p>
          </li>
          <li>
            <p>A listed item or service.</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Service1;
