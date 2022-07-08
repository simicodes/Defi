import React from "react";
import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover w-full h-full absolute -z-10"
        src={heroVid}
        alt="video"
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-center text-white px-4">
        <h1>Decentralized</h1>
        <h1 className="p-2">
          <span className="blue">Trading </span>Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-white text-center text-2xl font-bold">Total volume secured: $42,564,710,278430</p>
      </div>
    </div>
  );
};

export default Hero;
