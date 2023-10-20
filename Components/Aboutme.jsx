import Image from "next/image";
import React from "react";
import HeroButtonBackground from "../public/HeroB.png";
import DigitalArt from "../public/DigitalArt.png";
import { useSelector } from "react-redux";
import { Profile } from "iconsax-react";
function Aboutme() {
  const Aboutme = useSelector((state) => state.Data.Contetnt.Aboutme);
  const lan = useSelector((state) => state.Language);

  return (
    <div
      id="AboutMe"
      className="relative px-5 md:px-16  py-16 lg:py-32 min-h-screen"
    >
      <div className="w-[100%] h-[180px] top-[-100px] lg:top-[-180px] z-10  left-0 overflow-hidden  absolute ">
        <Image
          src={HeroButtonBackground}
          priority={true}
          placeholder={"empty"}
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
          <div
            className={`flex space-x-2  ${
              lan === "FA"
                ? "items-center justify-end"
                : "items-center justify-start"
            }`}
          >
            <Profile
              className={`${lan === "FA" ? "order-2" : "order-none"}`}
              variant="Bold"
              size={36}
            />

            <h1
              className={`text-4xl tracking-wide  text-gray-900 ${
                lan === "FA"
                  ? "font-Iransansblack order-1"
                  : "font-RubikSemiBold order-2"
              }`}
            >
              {Aboutme.Titel}
            </h1>
          </div>
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
            <div className="bgSkill relative">
              <h1 className="font-RubikSemiBold absolute -top-9">Next.js</h1>
              <div
                data-aos=""
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-value="87%"
                className="Skill puring"
              ></div>
            </div>
            <div className="bgSkill relative">
              <h1 className="font-RubikSemiBold font-semibold absolute -top-9">
                React.js , Redux
              </h1>
              <div
                data-aos=""
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-value="85%"
                className=" Skill react "
              ></div>
            </div>
            <div className="bgSkill relative ">
              <h1 className="font-RubikSemiBold   absolute -top-8 font-semibold ">
                Tailwind , Bootstrap
              </h1>
              <div
                data-aos=""
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-value="90%"
                className="Skill tailwind"
              ></div>
            </div>
          </div>
          {/* Progress Bar */}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
