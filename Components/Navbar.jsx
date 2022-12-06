import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import whiteLogo from "../public/Logo-White1.png";
import blackLogo from "../public/Logo1.png";
import whitelan from "../public/Lanwhite.png";
import blacklan from "../public/LanBlack.png";
import { useDispatch, useSelector } from "react-redux";
import { changelan } from "../Store/LanguageReducer";
import { ChangeData } from "../Store/DataReducer";
import Data from "../Data/Info";
import { setCookies } from "cookies-next";

function Navbar() {
  const [active, setactive] = useState(false);
  const [scrolled, setscroll] = useState(false);
  const [logo, setlogo] = useState(whiteLogo);
  const [lanlogo, setlanlogo] = useState(whitelan);
  const lan = useSelector((state) => state.Language);

  let Titel = ["Home", "AboutMe", "Projects", "Resume"];

  const dispatch = useDispatch();
  useEffect(() => {
    const changecolor = () => {
      if (window.scrollY >= 90) {
        setscroll(true);
        setlogo(blackLogo);
        setlanlogo(blacklan);
      } else {
        setscroll(false);
        setlogo(whiteLogo);
        setlanlogo(whitelan);
      }
    };
    window.addEventListener("scroll", changecolor);
  });
  const HumbergerHandler = () => {
    setactive(!active);
  };
  const ScrollActiveHandler = () => {
    setactive(false);
  };
  const MobileLan = () => {
    ScrollActiveHandler();
    ChangeLanHandler();
  };
  const ChangeLanHandler = () => {
    if (lan === "FA") {
      dispatch(changelan("EN"));
      setCookies("Languages", "EN");
      dispatch(ChangeData(Data.EN));
    } else {
      dispatch(changelan("FA"));
      setCookies("Languages", "FA");

      dispatch(ChangeData(Data.FA));
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 ease-in duration-500 ${
        scrolled ? "backdrop-blur-lg bg-white/70 drop-shadow-xl" : ""
      }`}
    >
      <div className=" max-w-[1140px]  md:px-10 relative mx-auto flex justify-between items-center p-5 ">
        <Image
          src={logo}
          width={55}
          height={100}
          alt="Logo"
          priority={true}
          placeholder={"empty"}
          sizes="max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,"
        />
        {/* Hamburger Menu */}

        <div
          onClick={HumbergerHandler}
          className={` md:hidden hamburger hamburger--collapse  cursor-pointer ${
            active ? "is-active" : ""
          }`}
        >
          <div className="hamburger-box">
            <div
              className={`hamburger-inner ${
                scrolled
                  ? " bg-black after:bg-black before:bg-black "
                  : "bg-white after:bg-white before:bg-white "
              }`}
            ></div>
          </div>
        </div>
        {/* Hamburger Menu End */}
        {/* NavbarTitel Mobile */}

        <div
          className={` w-full md:hidden absolute left-0 p-4 duration-300 ease-in z-20 ${
            !active ? " -top-80 opacity-0" : "top-20 opacity-1"
          }`}
        >
          <div className="w-full mx-auto  bg-white py-4 rounded">
            <ul className=" text-black py-3 space-y-7 text-center">
              {Titel.map((item, index) => {
                return (
                  <li
                    className="font-RubikSemiBold relative cursor-pointer font-semibold select-none"
                    key={index}
                  >
                    <Link
                      aria-label={item}
                      href={`/${item}`}
                      className={`relative linenav ${
                        scrolled ? "after:bg-black " : "after:bg-white"
                      } `}
                      onSetActive={ScrollActiveHandler}
                      activeClass="active"
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      delay={0}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
              <li className="flex items-center justify-center space-x-2">
                <Image src={blacklan} width={20} height={20} alt="" />
                <p
                  onClick={MobileLan}
                  className="font-RubikSemiBold cursor-pointer font-semibold select-none"
                >
                  {lan}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* NavbarTitel Desktop */}
        <div className=" hidden md:block">
          <ul
            className={`flex space-x-10 ${
              scrolled ? "text-black " : "text-white "
            }`}
          >
            {Titel.map((item, index) => {
              return (
                <li
                  className="font-RubikSemiBold cursor-pointer  select-none"
                  key={index}
                >
                  <Link
                    className={`relative linenav ${
                      scrolled ? "after:bg-black " : "after:bg-white"
                    } `}
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    delay={0}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
            <li className="flex items-center justify-center space-x-2">
              <Image src={lanlogo} width={20} height={20} alt="" />
              <p
                onClick={ChangeLanHandler}
                className="font-RubikSemiBold cursor-pointer font-semibold select-none"
              >
                {lan}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
