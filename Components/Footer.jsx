import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="h-[30%] bg-neutral-900 w-full py-5 text-white">
      <div className="flex text-2xl space-x-7 justify-center items-center">
        <a
          aria-label="GitHub"
          href="https://github.com/Kourosh-Hajivand"
          target={"_blank"}
        >
          <FaGithub />
        </a>
        <a
          aria-label="Whatsapp"
          href="https://wa.me/09038953557"
          target={"_blank"}
        >
          <FaWhatsapp />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/_kourosh.h/"
          target={"_blank"}
        >
          <FaInstagram />
        </a>
        <a
          aria-label="Telegram"
          href="https://t.me/kourosh_H"
          target={"_blank"}
        >
          <FaTelegramPlane />
        </a>
      </div>
      <div className="flex flex-row justify-center items-center mt-5 text-neutral-700 ">
        {/* <FaRegCopyright className="" /> */}
        <h1 className="font-Rubik tracking-wider ">Design By Kourosh-H</h1>
      </div>
    </div>
  );
}

export default Footer;
