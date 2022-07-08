import React from "react";

const AboutCard = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col border rounded-2xl text-left py-12 px-8">
      <div>
        <div className="bg-[#00d8ff] inline-flex p-4 rounded-full">
          {/* <SiHiveBlockchain size={40} /> */}
          {icon}
        </div>
        <h3 className="text-xl font-bold py-4">
          {/* Reliable, tamper-proof network */}
          {heading}
        </h3>
        <p>
          {/* Use decentralization, trusted nodes, premium data, and cryptographic
          proofs to connect highly accurate and available data/APIs to any smart
          contract. */}
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
