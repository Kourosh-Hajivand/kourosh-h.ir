import Image from "next/image";
import { FaHome } from "react-icons/fa";
import blacklan from "/public/LanBlack.png";
import Head from "next/head";
import { wrapper } from "../Store/store";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { CgLivePhoto } from "react-icons/cg";
import { ChangeData } from "../Store/DataReducer";
import Data from "../Data/Info";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import { changelan } from "../Store/LanguageReducer";
import Script from "next/script";

function Projectid(props) {
  const { loadedProject, Language } = props;
  const router = useRouter();
  const changelan = () => {
    const lan = getCookie("Languages");
    if (lan === "FA") {
      setCookie("Languages", "EN");
      router.reload();
    } else if (lan === "EN") {
      setCookie("Languages", "FA");
      router.reload();
    }
  };
  return (
    <>
      <Head>
        <title>{loadedProject.Titel}</title>
        <meta name="description" content={loadedProject.Description} />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXKW9QKSN4"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || []
             function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
               gtag('config', 'G-XXKW9QKSN4');`}
      </Script>
      <div className="w-full bg-gray-100  items-center duration-300 z-50">
        <div className="max-w-[1240px] w-full h-full min-h-screen  mx-auto  py-5 px-6 bg-white shadow-2xl rounded ">
          <div className="flex justify-between ">
            <Link href="/" target={""}>
              <div className="flex flex-row hover:drop-shadow-md space-x-2 bg-neutral-100 px-4 py-2 rounded items-center justify-center duration-300">
                <FaHome />
                <p>Home</p>
              </div>
            </Link>
            <div className="flex flex-row space-x-2 items-center justify-center">
              <Image src={blacklan} width={20} height={20} alt="" />
              <p
                onClick={changelan}
                className="font-RubikSemiBold cursor-pointer font-semibold select-none"
              >
                {Language}
              </p>
            </div>
          </div>
          <div className="grid  lg:grid-cols-2 w-full h-[90%]  lg:items-center select-none ">
            <div className="w-[100%] mt-5 min-h-[280px]  h-[90%] sm:w-[70%] sm:h-[90%] md:w-[50%] md:h-[100%] lg:h-[50%] lg:w-[80%] duration-300  mx-auto   relative">
              <Image
                src={loadedProject.Demo}
                fill
                alt="Preview"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority
              />
            </div>
            <div className="w-full mt-4 max-w-[600px] h-full mx-auto justify-top items-center flex flex-col">
              <h1
                className={`text-4xl  text-neutral-800 ${
                  Language === "FA" ? "font-IransansBold" : "font-RubikbBold"
                }`}
              >
                {loadedProject.Titel}
              </h1>
              <div
                className={`w-full  mt-3 space-y-12 text-start ${
                  Language === "FA" ? "text-end" : "text-start"
                }`}
              >
                {/* Discription Part */}
                <div>
                  <h1
                    className={`text-2xl  text-neutral-700 relative ${
                      Language === "FA" ? "font-IransansMD" : "font-RubikMD"
                    }`}
                  >
                    {loadedProject.DescriptionTitel}
                  </h1>
                  <p
                    className={`text-lg mt-2  text-neutral-500 relative SectionLine ${
                      Language === "FA"
                        ? "font-IransansThin"
                        : "font-RubikLight"
                    }`}
                  >
                    {loadedProject.Description}
                  </p>
                </div>
                {/* UsedLan Part */}
                <div>
                  <h1
                    className={`text-2xl mb-3  text-neutral-700 relative ${
                      Language === "FA" ? "font-IransansMD" : "font-RubikMD"
                    }`}
                  >
                    {loadedProject.usedlanguageTitel}
                  </h1>

                  <div className="w-full grid grid-cols-3 gap-5 relative SectionLine  select-none">
                    {loadedProject.usedlanguage.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`py-1 text-center text-white font-sans rounded drop-shadow hover:scale-110 hover:drop-shadow-xl duration-300  ${item.color}`}
                        >
                          <p>{item.Titel}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Feature Part */}

                <div>
                  <h1
                    className={`text-2xl mb-3  text-neutral-700 relative ${
                      Language === "FA" ? "font-IransansMD" : "font-RubikMD"
                    }`}
                  >
                    {loadedProject.PropertysTitel}
                  </h1>
                  <div className="w-full grid row-span-2 grid-cols-2 gap-2  ">
                    {loadedProject.Propertys.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="p-2 mt-2 drop-shadow hover:drop-shadow-lg duration-300 flex rounded text-neutral-500 items-center space-x-2 bg-neutral-100"
                        >
                          <Image
                            src={item.icon}
                            width={30}
                            height={30}
                            alt=""
                          />
                          <p>{item.Titel}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex w-full flex-col lg:flex-row lg:space-y-0 lg:space-x-6 lg:justify-start justify-center space-y-5">
                  <Link target={"_blank"} href={loadedProject.SourceCodeLink}>
                    <button className=" bg-black w-full  text-white border drop-shadow active:scale-90 focus:ring-offset-2 focus:ring-2 focus:ring-black border-black duration-300 flex  items-center justify-center space-x-2 px-6 py-3 rounded  hover:text-black hover:bg-transparent">
                      <AiFillGithub className="text-2xl" />
                      <p>Source Code</p>
                    </button>
                  </Link>
                  <Link target={"_blank"} href={loadedProject.ProjectUrl}>
                    <button className=" bg-transparent w-full text-black border drop-shadow border-black active:scale-90 duration-300 flex  items-center justify-center space-x-2 px-6 py-3 rounded  hover:text-white hover:bg-black">
                      <CgLivePhoto className="text-2xl" />
                      <p>Live Demo</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { params } = context;
    const lan = context.req.cookies.Languages;
    switch (lan) {
      case "FA":
        store.dispatch(changelan("FA"));
        store.dispatch(ChangeData(Data.FA));
        break;
      case "EN":
        store.dispatch(changelan("EN"));
        store.dispatch(ChangeData(Data.EN));
      default:
        break;
    }
    const Language = store.getState().Language;
    const projectid = params.projectid;
    const Project = store.getState().Data.Contetnt.ProjectPage.Projects;
    const FoundedProject = Project.find((item) => item.Projectid === projectid);
    if (FoundedProject === undefined) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        loadedProject: FoundedProject,
        Language: Language,
      },
    };
  }
);

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { projectid: "WeatherApp" } },
//       { params: { projectid: "TaskApp" } },
//       { params: { projectid: "OnlineShop" } },
//     ],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

export default Projectid;
