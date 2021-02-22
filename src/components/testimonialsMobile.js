import React from "react";
import ImageReusable from "./imageReusable";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TestimonialsMobile = () => {
  return (
    <Slider {...settings} className="overflow-hidden max-w-3xl">
      <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img
              src="//via.placeholder.com/100/eee"
              alt="profile image"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">
              "Thank you Rich for a job well done! Friendly, professional
              service and the clean up was great!"
            </p>
            <div class="text-gray-900 font-bold uppercase mt-6">- Kim R.</div>
            <div class="text-gray-600">2/12/2021</div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img
              src="//via.placeholder.com/100/eee"
              alt="profile image"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">
              "Thank you Rich for a job well done! Friendly, professional
              service and the clean up was great!"
            </p>
            <div class="text-gray-900 font-bold uppercase mt-6">- Kim R.</div>
            <div class="text-gray-600">2/12/2021</div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img
              src="//via.placeholder.com/100/eee"
              alt="profile image"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">
              "Thank you Rich for a job well done! Friendly, professional
              service and the clean up was great!"
            </p>
            <div class="text-gray-900 font-bold uppercase mt-6">- Kim R.</div>
            <div class="text-gray-600">2/12/2021</div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img
              src="//via.placeholder.com/100/eee"
              alt="profile image"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">
              "Thank you Rich for a job well done! Friendly, professional
              service and the clean up was great!"
            </p>
            <div class="text-gray-900 font-bold uppercase mt-6">- Kim R.</div>
            <div class="text-gray-600">2/12/2021</div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img
              src="//via.placeholder.com/100/eee"
              alt="profile image"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">
              "Thank you Rich for a job well done! Friendly, professional
              service and the clean up was great!"
            </p>
            <div class="text-gray-900 font-bold uppercase mt-6">- Kim R.</div>
            <div class="text-gray-600">2/12/2021</div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img
              src="//via.placeholder.com/100/eee"
              alt="profile image"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-gray-600">
              "Thank you Rich for a job well done! Friendly, professional
              service and the clean up was great!"
            </p>
            <div class="text-gray-900 font-bold uppercase mt-6">- Kim R.</div>
            <div class="text-gray-600">2/12/2021</div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialsMobile;
