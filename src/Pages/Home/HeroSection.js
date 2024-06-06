import React from "react";
import { UserIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div id="home" className="hero-section flex relative">
      <div className="shadow-dot absolute"></div>
      <div className="wrap wrapWidth gap-10 flex items-center md:flex-row flex-col text-white">
        <div className="flex flex-1 flex-col gap-6 md:items-start items-center md:py-0 py-10">
          <h1 className="text-white md:text-5xl text-3xl md:text-start text-center md:leading-[61px] leading-9">
            Trade, Triumph, and Transcend with{" "}
            <span className="text-themeColor">WTL Token!</span>{" "}
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
          <p className="font-pop text-white font-extralight text-sm leading-7 md:text-start text-center">
            Trade with the WTL Token, a cornerstone of innovation in the crypto,
            forex, and stock markets to triumph! With the WTL Token, you're not
            just participating but enhancing your trading capabilities in a
            dynamic community. WTL platform offers a robust system to reward
            engagement and smart trading strategies.
          </p>
          <Link
            to="/dashboard/home"
            className="btn-buy flex items-center justify-center gap-3 px-4 py-3"
          >
            <div className="flex items-center justify-center">
              <UserIcon />
            </div>
            <label className="text-white text-xs">Buy WTL Token Now</label>
          </Link>
        </div>
        <div className="flex flex-1">
          <img
            src="./images/hero-bg.svg"
            alt="/"
            className="md:h-full md:w-full h-[400px] animate-heartbeat"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
