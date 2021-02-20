import React from "react";
import { Link } from "gatsby";

const ServicesDropdownMobile = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div>
      <div className="inline-block text-left">
        <div>
          <button
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
            // onMouseEnter={() => setOpenMenu(true)}
            // onMouseLeave={() => setOpenMenu(false)}
            // className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            className="text-2xl focus:outline-none outline-none inline-flex justify-center text-white px-3 py-2 rounded-md text-sm font-medium"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Services
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {openMenu ? (
          <div
            // onMouseEnter={() => setOpenMenu(true)}
            // onMouseLeave={() => setOpenMenu(false)}
            className="origin-top-right absolute left-32 top-36 w-36 rounded-md bg-gray-900 border border-red-800 shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/service1"
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
                role="menuitem"
              >
                Residential Cleanouts
              </Link>
              <Link
                to="/service2"
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
                role="menuitem"
              >
                Maintenance
              </Link>
              <Link
                to="/service3"
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
                role="menuitem"
              >
                Limited Moving
              </Link>
              <Link
                to="/service4"
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
                role="menuitem"
              >
                Landscaping
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServicesDropdownMobile;
