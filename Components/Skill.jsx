/** @format */

import { DocumentCode2, MedalStar, Teacher } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SkillBg from "../public/Skill.jpg";
function Skill() {
  const lan = useSelector((state) => state.Language);
  return (
    <div className="w-full flex items-center justify-center SKillwraper">
      <div className="w-full h-full fixed top-0 left-0 ">
        <Image src={SkillBg} fill className="object-cover " alt="skill image" />
        <div className="w-full h-full bg-black/70 absolute top-0 left-0 z-10" />
      </div>
      <div className="w-full h-full flex md:flex-row flex-col space-y-20 md:space-y-0 md:my-0 px-10 lg:px-8 my-10 items-center  justify-between max-w-[1240px] mx-auto z-40">
        <div className="flex items-center justify-center text-gray-50 flex-col space-y-2">
          <div className="text-6xl flex items-center justify-center space-x-3 ">
            <h1 className=" font-RubikSemiBold">
              <CountUp end={4} enableScrollSpy />
            </h1>
            <MedalStar variant="Bold" size={56} />
          </div>
          <p
            className={`text-lg  text-gray-300 ${
              lan === "EN" ? "font-RubikLight" : "font-IransansThin"
            }`}
          >
            {lan === "EN"
              ? "More Than Years Experience of Coding"
              : "بیش از سال تجربه کد زدن"}
          </p>
        </div>
        <div className="flex  items-center justify-center text-gray-50 flex-col space-y-2">
          <div className="text-6xl flex items-center justify-center space-x-3 ">
            <h1 className=" font-RubikSemiBold">
              <CountUp end={30} enableScrollSpy />
            </h1>
            <DocumentCode2 variant="Bold" size={56} />
          </div>
          <p
            className={`text-lg  text-gray-300 ${
              lan === "EN" ? "font-RubikLight" : "font-IransansThin"
            }`}
          >
            {lan === "EN"
              ? "More Than Projects Compleated"
              : "بیش از پروژه انجام شده"}
          </p>
        </div>
        <div className="flex items-center justify-center text-gray-50 flex-col space-y-2">
          <div className="text-6xl flex items-center justify-center space-x-3 ">
            <h1 className=" font-RubikSemiBold">
              <CountUp end={6842} enableScrollSpy startOnMount />
            </h1>
            <Teacher variant="Bold" size={56} />
          </div>
          <p
            className={`text-lg  text-gray-300 ${
              lan === "EN" ? "font-RubikLight" : "font-IransansThin"
            }`}
          >
            {lan === "EN"
              ? "More Than Hours of Learning"
              : "بیش از ساعت یادگیری"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
