import * as React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import ServicesComp from "../components/services";
import TestimonialsMobile from "../components/testimonialsMobile";

//import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <main className="overflow-hidden">
        <title>RPM Home</title>
        <div className="h-screen bg-main-img bg-cover relative"></div>
        <div className="text-center mx-4">
          <h1>
            Welcome to the rich's property maintenance llc home page
            <br />
          </h1>
          <p>
            rich's property maintenance llc is a place where all your home
            maintenance needs.
          </p>
          <div className="lg:flex lg:justify-center">
            <div>Call us for a free quote --></div>
            <div className="rounded-md bg-blue-800 text-white text-center p-2 hover:bg-gray-700">
              <a href="tel:+496170961709">
                <p>Get A Quote: (860) 518-4302</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ServicesComp />
        </div>
        <div className="w-full">
          <Gallery />
        </div>
        <div className="w-full my-4 mx-4">
          <ContactForm />
        </div>
        <div>
          {/* <div className="hidden md:mx-auto md:block md:w-2/5">
            <Testimonials />
          </div> */}
          {/* <div className="md:hidden"> */}
          <div className="md:mx-auto md:block md:w-2/5">
            <TestimonialsMobile />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
