import { ArrowDown2, MobileProgramming } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Github from "../public/Project/GitHub.png";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

function Projects() {
  const lan = useSelector((state) => state.Language);
  const titel = useSelector(
    (state) => state.Data.Contetnt.ProjectPage.ProjectTitel
  );
  const [Ismobile, setIsmobile] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsmobile(isMobile);
  }, []);

  const ProjectCard = useSelector(
    (state) => state.Data.Contetnt.ProjectPage.Projects
  );
  return (
    <div
      id="Projects"
      className="px-5 flex items-center justify-center flex-col md:px-16  py-28 lg:py-44 bg-neutral-100 w-full min-h-screen  "
    >
      <div className="max-w-[1240px] text-center mx-auto flex flex-col justify-center items-center">
        <h1
          className={`text-4xl mb-5 tracking-wide  block text-neutral-800 ${
            lan === "FA" ? "font-Iransansblack" : "font-RubikSemiBold"
          }`}
        >
          {titel}
        </h1>
        <span className="relative w-60 inline-block lines">
          <i className="Square"></i>
          <i className="Square"></i>
          <i className="Square"></i>
        </span>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  xl:grid-cols-3 gap-8 mt-7">
        {ProjectCard.map((item, index) => {
          if (Ismobile) {
            return (
              <div
                data-aos="fade-up"
                data-aos-offset="00"
                data-aos-delay="50"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                key={index}
              >
                <div className="py-6 px-6 min-h-[200px] select-none xl:space-y-3 rounded-md bg-white group shadow-md projectcard relative duration-300 hover:shadow-xl ">
                  <div
                    className={`w-full mb-3 flex ${
                      lan === "FA" ? "justify-end" : "justify-start"
                    } `}
                  >
                    <div className=" rounded-full bg-neutral-800 p-3 z-10 flex items-center justify-center inner-element ">
                      <div className="w-[35px] h-[35px]  relative z-10 ">
                        <Image
                          src={item.logo}
                          fill
                          sizes="100%"
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`text-2xl   text-gray-700 tracking-normal mb-3 ${
                      lan === "FA" ? "font-IransansMD text-end" : "font-RubikMD"
                    }`}
                  >
                    {item.Titel}
                  </h1>
                  <p
                    className={`text-gray-500  min-h-[50px]  ${
                      lan === "FA"
                        ? "font-IransansThin text-end"
                        : "font-RubikLight"
                    }`}
                  >
                    {item.Description}
                  </p>
                  <div
                    className={`w-full flex ${
                      lan === "FA" ? "justify-end " : "justify-start"
                    }`}
                  >
                    <Link
                      href={`/${item.Projectid}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.Titel}
                    >
                      <button
                        className={`px-8 mt-2 active:scale-75  duration-300 ease-in rounded-sm  group-hover:bg-gray-900 group-hover:text-gray-50 py-2  border-black border ${
                          lan === "FA" ? "font-IransansMD" : "font-Rubik"
                        }`}
                      >
                        {lan === "FA" ? "بیشتر" : "See more"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <Tilt
                perspective={1500}
                className="parallax-effect"
                data-aos="fade-up"
                data-aos-offset="00"
                data-aos-delay="50"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                key={index}
              >
                <div className="py-6 px-6 min-h-[200px] select-none xl:space-y-3 rounded-md bg-white group shadow-md projectcard relative duration-300 hover:shadow-xl ">
                  <div
                    className={`w-full mb-3 flex ${
                      lan === "FA" ? "justify-end" : "justify-start"
                    } `}
                  >
                    <div className=" rounded-full bg-neutral-800 p-3 z-10 flex items-center justify-center inner-element ">
                      <div className="w-[35px] h-[35px]  relative z-10 ">
                        <Image
                          src={item.logo}
                          fill
                          sizes="100%"
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`text-2xl   text-gray-700 tracking-normal mb-3 ${
                      lan === "FA" ? "font-IransansMD text-end" : "font-RubikMD"
                    }`}
                  >
                    {item.Titel}
                  </h1>
                  <p
                    className={`text-gray-500  min-h-[50px]  ${
                      lan === "FA"
                        ? "font-IransansThin text-end"
                        : "font-RubikLight"
                    }`}
                  >
                    {item.Description}
                  </p>
                  <div
                    className={`w-full flex ${
                      lan === "FA" ? "justify-end " : "justify-start"
                    }`}
                  >
                    <Link
                      href={`/${item.Projectid}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.Titel}
                    >
                      <button
                        className={`px-8 mt-2 active:scale-75  duration-300 ease-in rounded-sm  group-hover:bg-gray-900 group-hover:text-gray-50 py-2  border-black border ${
                          lan === "FA" ? "font-IransansMD" : "font-Rubik"
                        }`}
                      >
                        {lan === "FA" ? "بیشتر" : "See more"}
                      </button>
                    </Link>
                  </div>
                </div>
              </Tilt>
            );
          }
        })}
        <div
          data-aos="fade-up"
          data-aos-offset="00"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <div className="py-6 px-6 min-h-[200px] xl:space-y-3 rounded-md bg-white group shadow-md projectcard relative duration-300 hover:shadow-xl ">
            <div
              className={`w-full mb-3 flex ${
                lan === "FA" ? "justify-end" : "justify-start"
              } `}
            >
              <div className="animate-bounce rounded-full bg-neutral-800 p-3 z-10 flex items-center justify-center">
                <div className="w-[35px] h-[35px]  relative z-10">
                  <Image
                    src={Github}
                    fill
                    sizes="100%"
                    className="object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h1
              className={`text-2xl   text-gray-700 tracking-normal mb-3 ${
                lan === "FA" ? "font-IransansMD text-end" : "font-RubikMD"
              }`}
            >
              {lan === "FA" ? "گیت هاب" : "GitHub"}
            </h1>
            <p
              className={`text-gray-500  min-h-[50px]  ${
                lan === "FA" ? "font-IransansThin text-end" : "font-RubikLight"
              }`}
            >
              {lan === "FA"
                ? "! برای دیدن باقی پروژه ها به گیت هاب من سر بزنید"
                : "For See more Project Check my Github Acount !"}
            </p>
            <div
              className={`w-full flex ${
                lan === "FA" ? "justify-end " : "justify-start"
              }`}
            >
              <Link
                href="https://github.com/Kourosh-Hajivand?tab=repositories"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <button
                  className={`px-8 mt-2 active:scale-75  duration-300 ease-in rounded-sm  group-hover:bg-gray-900 group-hover:text-gray-50 py-2  border-black border ${
                    lan === "FA" ? "font-IransansMD" : "font-Rubik"
                  }`}
                >
                  {lan === "FA" ? "بیشتر" : "See more"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
