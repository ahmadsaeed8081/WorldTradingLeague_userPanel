import React from "react";
import { GraphUpIcon } from "../../assets/Icons";

const CoreBenefits = () => {
  return (
    <div className="core-benefits flex py-20">
      <div className="wrap wrapWidth flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            WTL is Empowering{" "}
            <span className="text-themeColor">Traders Worldwide</span>
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <p className="text-white font-pop font-extralight text-sm leading-6 sm:w-2/3 w-full text-center">
          Join the WTL community today and take your trading to the next level
          with WTL. Whether you're competing, investing, or just engaging with
          the community, WTL Token offers something for everyone.
        </p>
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1">
          <div className="flex flex-col w-full gap-6 border-r border-white h-full px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-7 w-7">
                <GraphUpIcon />
              </div>
              <h1 className="text-white">Exclusive Access to WTL</h1>
            </div>
            <p className="text-white font-pop text-xs leading-5 font-extralight">
              Unlock premium features and exclusive trading competitions only
              accessible to token holders. Your WTL Tokens open doors to unique
              marketplaces and high-stakes trading arenas.
            </p>
          </div>
          <div className="flex flex-col w-full gap-6 border-r border-white h-full px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-7 w-7">
                <GraphUpIcon />
              </div>
              <h1 className="text-white">Governance Rights</h1>
            </div>
            <p className="text-white font-pop text-xs leading-5 font-extralight">
              Your opinions on platform updates, rule changes, and new features
              are crucial. We ensure that your voice is heard, making you a
              vital part of our decision-making process.
            </p>
          </div>
          <div className="flex flex-col w-full gap-6 h-full px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-7 w-7">
                <GraphUpIcon />
              </div>
              <h1 className="text-white">Discounts and Rewards</h1>
            </div>
            <p className="text-white font-pop text-xs leading-5 font-extralight">
              Maximize your earnings and save on transactions by enjoying
              discounts on World Trading League entry fees when you pay with WTL
              Tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreBenefits;
