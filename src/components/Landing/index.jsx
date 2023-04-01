import React from "react";
import Waves from "../../assets/Waves.png";
import CharOne from "../../assets/CharOne.svg";
import PageContainer from "../PageContainer";
const index = () => {
  return (
    <div>
      <h1 className="text-[34px] text-center mt-[83px] tracking-wide text-primary font-semibold">
        FitTrack.
      </h1>
      <div
        className="w-full h-[255px] mt-[240px] relative"
        style={{
          backgroundImage: `url(${Waves})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className=" mb-[85px] absolute bottom-10"
          src={CharOne}
          alt="WorkOut"
        />
      </div>
      <div className="bg-primary h-full -mt-1">
        <div className="px-10">
          <h1 className="text-[32px] font-semibold text-background">
            Welcome to FitTrack.
          </h1>
          <h2 className="text-[24px] font-semibold text-background">
            Get your progress tracked
          </h2>
          <div className="w-[190px] h-1 rounded-full my-[20px] bg-background"></div>
          <p className="text-[20px] font-medium text-background">
            Track your daily activities for your body progress.
          </p>
          <button className="text-primary bg-background rounded-3xl mt-[55px] mb-5 text-[20px] py-[15px] w-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
