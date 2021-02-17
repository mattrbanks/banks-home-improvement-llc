import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import ServicesComp from "../components/services";

//import SEO from "../components/seo";
//import ImageReusable from "../components/imageReusable";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>RPM Home</title>
        <div className="h-screen bg-main-img bg-cover relative"></div>
        <h1>
          Welcome to the rich's property maintenance llc home page
          <br />
        </h1>
        <p>
          rich's property maintenance llc is a place where all your home
          maintenance needs.
        </p>
        <div className="">
          <a href="tel:+496170961709">
            <p>Get A Quote: (xxx) xxx-xxxx</p>
          </a>
        </div>
        <div className="w-full border">
          <ServicesComp />
        </div>
        <div className="w-full border">
          <Gallery />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
        <div className="w-full h-screen">
          <Testimonials />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
