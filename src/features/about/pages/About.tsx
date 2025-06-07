import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FaRegCircleQuestion />
        <span>Sobre</span>
      </h1>
    </div>
  );
};

export default About;
