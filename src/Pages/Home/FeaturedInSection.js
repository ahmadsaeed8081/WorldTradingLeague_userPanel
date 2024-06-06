import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const FeaturedInSection = () => {
  const featuredList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="featured-in-section flex flex-col w-full gap-10 sm:py-20 py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
          Featured In
        </h1>
        <img src="./images/separator.svg" alt="separator" className="w-20" />
      </div>
      <div className="bg-[#1B1B1B] flex items-center h-24 py-5 sm:px-0 px-3">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={20}
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Prevents autoplay from being disabled after user interactions
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {featuredList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center gap-1">
                <img
                  src="./images/f1.png"
                  alt="logo"
                  className=" h-10 w-10 object-contain"
                />
                <h1 className="text-white text-xl  font-medium">Logoipsum</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedInSection;
