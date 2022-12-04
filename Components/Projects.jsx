import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
function Projects() {
  const lan = useSelector((state) => state.Language);
  const titel = useSelector(
    (state) => state.Data.Contetnt.ProjectPage.ProjectTitel
  );

  const ProjectCard = useSelector(
    (state) => state.Data.Contetnt.ProjectPage.Projects
  );
  return (
    <div
      id="Projects"
      className="px-5  md:px-16  py-28 lg:py-44 bg-neutral-100 w-full  "
    >
      <div className="max-w-[1240px] text-center mx-auto flex flex-col justify-center items-center">
        <h1
          className={`text-4xl mb-5 tracking-wide font-RubikSemiBold block text-neutral-800 ${
            lan === "FA" ? "font-IransansBold" : "font-RubikSemiBold"
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
          return (
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              key={index}
            >
              <div className="py-6 px-6 min-h-[200px] xl:space-y-3 rounded-md bg-white transition-all drop-shadow-lg projectcard relative duration-300 hover:drop-shadow-2xl ">
                <div
                  className={`w-full mb-3 flex ${
                    lan === "FA" ? "justify-end" : "justify-start"
                  } `}
                >
                  <div className="w-[50px] h-[50px] relative z-10">
                    <Image src={item.logo} fill sizes="100%" alt="" />
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
                  className={`text-gray-500 font-RubikLight min-h-[50px]  ${
                    lan === "FA" ? "font-IransansMD text-end" : "font-RubikMD"
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
                      className={`px-8 active:scale-75  duration-300 ease-in rounded-sm  hover:bg-gray-900 hover:text-gray-50 py-2 border-black border ${
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
        })}
      </div>
    </div>
  );
}

export default Projects;
