import React from "react";
import terminal from "../assets/terminal.png"

const Developers = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1240px] mx-auto  py-16 px-4 md:flex">
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="blue">documentation</span>, the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
            <img className="max-w-[250px] shadow-lg shadow-cyan-500/50" src={terminal} alt="term"/>
        </div>
      </div>
    </div>
  );
};

export default Developers;
