/** @format */

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import whiteLogo from "../public/Logo-White1.png";
import blackLogo from "../public/Logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { changelan } from "../Store/LanguageReducer";
import { ChangeData } from "../Store/DataReducer";
import Data from "../Data/Info";
import { setCookies } from "cookies-next";
import { LanguageCircle } from "iconsax-react";
import { motion } from "framer-motion";
function Navbar() {
  const [active, setactive] = useState(false);
  const [scrolled, setscroll] = useState(false);
  const [logo, setlogo] = useState(whiteLogo);

  const lan = useSelector((state) => state.Language);

  let Titel = ["Home", "AboutMe", "Projects", "Resume", "Contact Me"];

  const dispatch = useDispatch();
  useEffect(() => {
    const changecolor = () => {
      if (window.scrollY >= 90) {
        setscroll(true);
        setlogo(blackLogo);
      } else {
        setscroll(false);
        setlogo(whiteLogo);
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
      className={`fixed top-0 left-0 w-full z-50 px-6 duration-500 ${
        scrolled ? " py-6" : "py-2"
      }  `}
    >
      <div
        className={` max-w-[1340px]  md:px-10 relative mx-auto flex justify-between rounded-3xl items-center px-6 py-4 ease-in duration-500 ${
          scrolled ? "backdrop-blur-lg bg-white/60 shadow-xl" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <Link
            onSetActive={ScrollActiveHandler}
            activeClass="active"
            to={"Home"}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            delay={0}
            className="cursor-pointer"
          >
            <motion.div
              animate={scrolled ? { scale: 1 } : { scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className=" w-[60px] h-[60px] relative"
            >
              <Image
                src={logo}
                fill
                alt="Logo"
                priority={true}
                placeholder={"empty"}
                sizes="max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,"
              />
            </motion.div>
          </Link>
          {/* Hamburger Menu */}
          <motion.div
            animate={
              scrolled
                ? { translateX: -80, opacity: 0, scale: 0.9 }
                : { translateX: 0, opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <h1
              className={`text-2xl font-bold ${
                scrolled ? "text-black " : "text-white"
              } `}
            >
              Kourosh H
            </h1>
          </motion.div>
        </div>
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
            !active ? " -top-[500%] opacity-0" : "top-20 opacity-1"
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
                      className={`relative  linenav ${
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
                <LanguageCircle variant="Bold" />

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
        <div className=" hidden md:block md:text-sm lg:text-base">
          <ul
            className={`flex gap-10 items-center ${
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
              <LanguageCircle variant="Bold" />

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
