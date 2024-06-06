import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const bannerList = [{}, {}, {}, {}, {}];
  return (
    <div className="banner-section flex py-20">
      <div className="wrap wrapWidth flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-themeColor md:text-2xl text-xl md:text-start text-center">
            Banner
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <div className="bg-[#1B1B1B] flex items-center min-h-24">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 30000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Prevents autoplay from being disabled after user interactions
            }}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {bannerList.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="banner-image flex items-center gap-1"
                  style={{ backgroundImage: `url(/images/b1.webp)` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
