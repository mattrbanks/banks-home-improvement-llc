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
        <div className="text-center">
          <div className="p-6 w-full bg-black text-white text-xl">
            We practice social distancing and follow all the guidelines from the
            CDC and WHO. Our goal is for you to have a safe and stress free
            experience. <br />
            We are licensed and bonded with 25+ years experienced in the
            business.
          </div>
          <div className="flex justify-center">
            <div className="rounded-md bg-blue-800 text-white hover:text-black text-center p-2 hover:bg-yellow-400 mt-8">
              <a className="block" href="tel:+1860-518-4302">
                <p>Get A Free Quote: (860) 518-4302</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ServicesComp />
        </div>
        <div className="text-center bg-blue-900 text-white p-6 text-2xl mb-4">
          <p>Here is some of our work</p>
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
          <div className="text-center bg-gradient-to-r from-red-800 via-white to-blue-900 text-black p-6 text-2xl mb-4">
            <p>Here is what our customers are saying</p>
          </div>
          <div className="md:mx-auto md:block md:w-2/5">
            <TestimonialsMobile />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
