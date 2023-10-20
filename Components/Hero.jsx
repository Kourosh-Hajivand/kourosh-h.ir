import info from "../Data/Info";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

import Typewriter from "typewriter-effect";
import HeroImage from "../public/HeroPage.jpg";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
function Hero() {
  const store = useSelector((state) => state);

  return (
    <div
      id="Home"
      className="h-screen flex justify-center text-center items-center relative imagewraper  "
    >
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src={HeroImage}
          fill
          className="object-cover"
          priority={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
          quality={100}
          alt="Hero background"
        />
      </div>

      <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="z-[2] text-white space-y-6">
        <h5 className="text-xl font-Rubik tracking-widest">Welcome</h5>
        <div className="flex flex-row space-x-3 justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl block font-bold font-RubikbBold">
            I Am
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl block font-bold font-RubikbBold">
            <Typewriter
              options={{
                strings: [
                  "Kourosh Hajivand",
                  "Front-End Developer",
                  "Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>

        <p className="font-RubikLight text-sm tracking-widest px-3 md:px-0 ">
          Website and design are the core of success for Your businesses.
        </p>
        <div className="flex text-lg space-x-4 justify-center items-center">
          <a
            rel="noreferrer"
            aria-label="GitHub"
            href="https://github.com/Kourosh-Hajivand"
            target={"_blank"}
          >
            <FaGithub />
          </a>
          <a
            rel="noreferrer"
            aria-label="Whatsapp"
            href="https://wa.me/09038953557"
            target={"_blank"}
          >
            <FaWhatsapp />
          </a>
          <a
            rel="noreferrer"
            aria-label="Instagram"
            href="https://www.instagram.com/_kourosh.h/"
            target={"_blank"}
          >
            <FaInstagram />
          </a>
          <a
            rel="noreferrer"
            aria-label="Telegram"
            href="https://t.me/kourosh_H"
            target={"_blank"}
          >
            <FaTelegramPlane />
          </a>
        </div>
        <Link
          to={"Contact Me"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          delay={0}
          aria-label="Contact Me"
          href="/Contact Me"
        >
          <button className="px-8 py-3 mt-5 border active:scale-75 rounded-sm border-white hover:bg-white hover:text-black duration-300 ease-in">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
