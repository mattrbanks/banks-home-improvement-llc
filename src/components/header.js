import React from "react";
import ImageReusable from "./imageReusable";
import richlogo from "../images/richslogoblue.svg";
import { Link } from "gatsby";
import ServicesDropdown from "./servicesDropdown";
import ServicesDropdownMobile from "./servicesDropdownMobile";
import "./styles.css";

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

  return (
    <nav className="bg-blue-900">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="fixed z-20 inset-y-0 h-10 bg-black rounded-full top-4 right-5 border border-red-800 flex items-center lg:hidden">
            <button
              //   onClick={() => setOpenMenuMobile(!openMenuMobile)}
              onClick={() => {
                setOpenMenuMobile(!openMenuMobile);
                if (openMenuMobile === true) {
                  const modal = document.getElementById("mobile-menu-id");
                  modal.classList.remove("animate-opacity");
                  modal.classList.add("animate-opacity-close");
                  setTimeout(function () {
                    modal.style.display = "none";
                  }, 700);
                } else {
                  const modal = document.getElementById("mobile-menu-id");
                  modal.classList.remove("animate-opacity-close");
                  modal.classList.add("animate-opacity");
                  modal.style.display = "flex";
                }
              }}
              className="focus:outline-none outline-none z-20 inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center sm:items-stretch">
            <Link to="/">
              <div className="bg-white border border-gray-900 rounded-3xl flex-shrink-0 flex items-center">
                <img className="w-10 mx-4 my-4" alt="mb logo" src={richlogo} />
                {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}
              </div>
            </Link>

            <div
              style={{ textDecoration: "underline #991B1B" }}
              className="text-white mx-5 my-5 md:text-xl lg:text-2xl w-1/2"
            >
              Banks Home Improvement LLC
            </div>

            <div className="fixed right-0 z-10 hidden lg:block lg:ml-6">
              <div className="flex space-x-4 bg-gray-900 rounded-md border border-red-800">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <ServicesDropdown />
                {/* <Link
                  to="/services"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link> */}
                <Link
                  to="/extended-gallery"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <div className="ml-3 relative">
          <div>
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>
    
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</Link>
          </div>
        </div>
      </div> */}
        </div>
      </div>

      {openMenuMobile ? (
        <div
          id="mobile-menu-id"
          className="animate-opacity bg-blue-900 fixed top-0 left-0 z-10 w-full h-screen overflow-hidden flex justify-center items-center"
        >
          <div className="relative px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-2xl text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <ServicesDropdownMobile />
            {/* <Link
              to="/services"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link> */}
            <Link
              to="/extended-gallery"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <div
          id="mobile-menu-id"
          className="animate-opacity-close hidden bg-blue-900 fixed top-0 left-0 z-10 w-full h-screen overflow-hidden flex justify-center items-center"
        >
          <div className="relative px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-2xl text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <ServicesDropdownMobile />
            {/* <Link
              to="/services"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link> */}
            <Link
              to="/extended-gallery"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>

    // <div className="z-10 w-full h-20 bg-white bg-opacity-90 absolute top-0 left-0 text-white border-b border-red-700 flex">
    //   <img className="w-10 mx-4 my-4" alt="mb logo" src={richlogo} />
    //   <div
    //     style={{ textDecoration: "underline #DF292D" }}
    //     className="text-black mx-5 my-5 text-2xl w-1/2"
    //   >
    //     Rich's Property Maintenance LLC
    //   </div>
    //   <div className="flex justify-end w-1/2">
    //     <div className="text-black flex justify-around w-1/2 mx-5 my-6">
    //       <Link to="/">Home</Link>
    //       <Link to="/about">About Us</Link>
    //       <Link to="/services">Services</Link>
    //       <Link to="/extended-gallery">Gallery</Link>
    //       <Link to="/contact">Contact</Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
