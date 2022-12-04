import Image from "next/image";
import React from "react";
import HeroButtonBackground from "../public/HeroB.png";
import DigitalArt from "../public/DigitalArt.png";
import { useSelector } from "react-redux";
function Aboutme() {
  const Aboutme = useSelector((state) => state.Data.Contetnt.Aboutme);
  const lan = useSelector((state) => state.Language);

  return (
    <div id="AboutMe" className="relative px-5 md:px-16  py-16 lg:py-32">
      <div className="w-[100%] h-[100px] top-[-100px] z-10  left-0 overflow-hidden  absolute ">
        <Image
          src={HeroButtonBackground}
          priority={true}
          placeholder={"blur"}
          alt=""
        />
      </div>
      <div className="grid  lg:grid-cols-2 max-w-[1240px] gap-5 mx-auto justify-center items-center">
        <div className="w-[100%] lg:w-[70%] mx-auto relative Border before:hidden lg:before:block p-5">
          <Image
            data-aos="fade"
            data-aos-offset="00"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            src={DigitalArt}
            className="relative z-[2] rounded-sm"
            alt=""
          />
        </div>
        <div className=" mt-4  parent">
          <h1
            className={`text-4xl tracking-wide  text-gray-900 ${
              lan === "FA"
                ? "font-Iransansblack text-end"
                : "font-RubikSemiBold"
            }`}
          >
            {Aboutme.Titel}
          </h1>
          <h4
            className={`text-lg mt-2  text-gray-600 ${
              lan === "FA" ? "font-IransansMD text-end" : "font-RubikMD"
            }`}
          >
            {Aboutme.describ}
          </h4>
          <p
            className={`my-4 leading-loose text-gray-500 ${
              lan === "FA"
                ? "font-IransansThin text-end text-gray-800"
                : "font-RubikLight "
            }`}
          >
            {Aboutme.AboutmeText}
          </p>

          {/* Progress Bar */}
          <div className="mt-14 space-y-12">
            <div className="bgSkill">
              <div
                data-aos=""
                data-aos-offset="00"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-value="75%"
                className="Skill puring"
              >
                <h1 className="font-RubikSemiBold absolute -top-9">Next.js</h1>
              </div>
            </div>
            <div className="bgSkill">
              <div
                data-aos=""
                data-aos-offset="00"
                data-aos-delay="50"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-value="80%"
                className=" Skill react "
              >
                <h1 className="font-RubikSemiBold font-semibold absolute -top-9">
                  React.js , Redux
                </h1>
              </div>
            </div>
            <div className="bgSkill">
              <div
                data-aos=""
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out"
                data-value="90%"
                className="Skill tailwind"
              >
                <h1 className="font-RubikSemiBold font-semibold  absolute -top-9">
                  Tailwind , Bootstrap
                </h1>
              </div>
            </div>
          </div>
          {/* Progress Bar */}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
