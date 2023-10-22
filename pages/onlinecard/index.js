import { Call } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
function App() {
  return (
    <div className="flex justify-center min-h-screen w-full bg-black">
      <div className="w-full max-w-[420px] rounded-2xl overflow-hidden min-h-screen ">
        <div className="w-full h-[420px]  relative">
          <Image
            src={"/IMG_7942.jpeg"}
            alt="personal"
            fill
            className="object-cover"
          />
          <div className="bg-gradient-to-t from-black to-transparent h-[60%] w-full  absolute bottom-0 left-0"></div>
          <div className="absolute left-6 bottom-10">
            <h1 className="text-2xl text-white font-semibold">Kourosh H</h1>
            <p className="text-white/50">Front-End Developer</p>
          </div>
        </div>
        <div className="w-full bg-black py-4 px-5 h-full">
          <h1 className="text-2xl font-semibold text-white ">
            Contact with me
          </h1>
          <div className="flex flex-col gap-5 mt-4">
            <Link
              rel="noreferrer"
              aria-label="Telegram"
              href="https://www.kourosh-h.ir/"
              target={"_blank"}
              className="w-full inline-block bg-sky-600  relative rounded-full p-3 text-white text-center"
            >
              <TbWorld size={24} className="absolute left-6 " />
              <p className="font-semibold">Website</p>
            </Link>
            <Link
              rel="noreferrer"
              aria-label="Telegram"
              href="https://github.com/Kourosh-Hajivand"
              target={"_blank"}
              className="w-full inline-block bg-white   relative rounded-full p-3 text-black text-center"
            >
              <BsGithub size={24} className="absolute left-6 " />
              <p className="font-semibold">GitHub</p>
            </Link>
            <Link
              rel="noreferrer"
              aria-label="Telegram"
              href="https://t.me/kourosh_H"
              target={"_blank"}
              className="w-full inline-block bg-sky-600  relative rounded-full p-3 text-white text-center"
            >
              <FaTelegramPlane size={24} className="absolute left-6 " />
              <p className="font-semibold">Telegram</p>
            </Link>
            <Link
              rel="noreferrer"
              aria-label="Telegram"
              href="tel:09038953557"
              className="w-full inline-block bg-green-600  relative rounded-full p-3 text-white text-center"
            >
              <IoCall size={24} className="absolute left-6 " />
              <p className="font-semibold">Call</p>
            </Link>
          </div>
          {/* <div className="flex">
            <div className="bg-black rounded-full p-2">
              <Call size="32" color="#FFFFFF" />
            </div>
            <div>
              <h1>Mobile</h1>
              <p>09038953557</p>
            </div>
          </div> */}

          {/* <div className="w-full sticky top-20 left-0">
            <button className="border p-6 border-white bg-transparent text-white">
              Add Contact
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
