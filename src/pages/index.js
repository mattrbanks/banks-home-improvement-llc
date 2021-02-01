import * as React from "react";
import Layout from "../components/layout";
//import SEO from "../components/seo";
//import ImageReusable from "../components/imageReusable";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>RPM Home</title>
        <h1>
          Welcome to the rich's property maintenance llc home page
          <br />
        </h1>
        <p>
          rich's property maintenance llc is a place where all your home
          maintenance needs.
        </p>
        <div className="w-full h-screen bg-black"></div>
        <div className="w-full h-screen bg-white"></div>
        <div className="w-full h-screen bg-black"></div>
        <div className="w-full h-screen bg-white"></div>
        <div className="w-full h-screen bg-black"></div>
      </main>
    </Layout>
  );
};

export default IndexPage;
