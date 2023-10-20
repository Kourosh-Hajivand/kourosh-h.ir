import Image from "next/image";
import resume from "../public/Resume.png";
import { RiSmartphoneLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
function Resume() {
  const Resumetitel = useSelector(
    (state) => state.Data.Contetnt.Resumepage.ResumeTitel
  );
  const lan = useSelector((state) => state.Language);

  const [hover, sethover] = useState(false);
  const [Modal, setModal] = useState(false);
  useEffect(() => {
    if (Modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  const hoverHandler = () => {
    sethover(true);
  };
  const UnhoverHandler = () => {
    sethover(false);
  };
  const ImagePreviewHandler = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };

  return (
    <div
      id="Resume"
      className="px-5 md:px-16 flex items-center justify-center flex-col pt-16 lg:py-28 bg-neutral-50 relative w-full min-h-screen h-full"
    >
      {Modal ? (
        <div
          onClick={CloseModal}
          className="w-full h-screen duration-500 fixed left-0 top-0  flex justify-center items-center bg-black/50 backdrop-blur-lg z-40"
        >
          <GrClose
            className="absolute cursor-pointer right-10 top-10 text-4xl text-white z-20"
            onClick={CloseModal}
            color="#FFFFFF"
          />
          <div className="w-[90%] sm:w-[70%] md:w-[50%]  lg:w-[40%] xl:w-[30%] relative h-full ">
            <Image
              fill
              className="object-contain"
              src={lan === "FA" ? "/Resume FN.png" : "/Resume EN.png"}
              alt=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="max-w-[1240px] text-center mx-auto flex flex-col justify-center items-center">
        <h1
          className={`text-4xl mb-5 tracking-wide  block text-neutral-800 ${
            lan === "FA"
              ? "font-Iransansblack tracking-wider"
              : "font-RubikSemiBold"
          }`}
        >
          {Resumetitel}
        </h1>
        <span className="relative w-60 inline-block lines">
          <i className="Square"></i>
          <i className="Square"></i>
          <i className="Square"></i>
        </span>
      </div>
      <div className="grid lg:grid-cols-2 my-7 mx-auto pb-10 gap-5 max-w-[1240px] justify-center items-center">
        <div className="w-[50%] md:w-[40%] lg:w-[60%] xl:w-[50%]  h-[370px]  mx-auto overlay duration-300 ease-in shadow-md hover:shadow-lg relative rounded overflow-hidden ">
          <div
            onClick={ImagePreviewHandler}
            className=" opacity-0 font-Rubik font-bold z-20  text-white cursor-pointer absolute top-0 left-0 w-full flex justify-center items-center h-full duration-300 ease-in hover:backdrop-blur-lg hover:opacity-100"
          >
            Preview
          </div>
          <Image
            className="object-contain"
            fill
            src={lan === "FA" ? "/Resume FN.png" : "/Resume EN.png"}
            alt=""
          />
        </div>
        <div className="grid xl:grid-cols-2  gap-5 text-neutral-50 ">
          <div className="w-full min-h-[100px] flex flex-col justify-center items-center max-w-[500px] mx-auto bg-neutral-700 shadow-md shadow-neutral-900/50 text-center space-y-3 rounded p-3">
            <div className="flex items-center justify-center">
              <RiSmartphoneLine className="text-2xl " />
              <h1 className="text-xl font-RubikMD ">Phone</h1>
            </div>
            <h4 className="text-md font-RubikLight text-neutral-200 ">
              +98 09038953557
            </h4>
          </div>
          <div className="w-full max-w-[500px]  min-h-[100px] mx-auto justify-center items-center bg-neutral-700 shadow-md shadow-neutral-900/50 text-center space-y-3 rounded p-3 py-5">
            <div className="flex items-center justify-center">
              <HiOutlineMail className="text-2xl mx-2" />
              <h1 className="text-xl font-RubikMD ">Email</h1>
            </div>
            <h4 className="text-md font-RubikLight text-neutral-200">
              kourosh.hajivand0@gmail.com
            </h4>
          </div>
          <div className="w-full  space-y-3 xl:col-span-2 rounded p-3">
            <a
              href={`${lan === "FA" ? "/Resume FN.pdf" : "/Resume EN.pdf"}`}
              download
            >
              <button
                onMouseOver={hoverHandler}
                onMouseOut={UnhoverHandler}
                className=" mx-auto  rounded border duration-300 ease-in text-gray-800 border-gray-700 hover:bg-black focus:ring-offset-2 focus:ring-2 focus:ring-black active:scale-90 hover:text-white hover:drop-shadow-xl flex justify-between items-center px-4  w-[90%] md:w-[40%] lg:w-[60%] xl:w-[50%]  h-[50px]"
              >
                <p className="font-Rubik">Download Resume File</p>
                <span
                  className={`w-[30px] h-[30px] rounded-full  border-2 border-gray-500 duration-500 ease-in relative ${
                    hover ? "border-orange-400 animate-bounce" : ""
                  }`}
                >
                  <i
                    className={`w-[2px] h-[12px] duration-500 ease-in bg-gray-500 absolute rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                      hover ? "bg-orange-400   " : ""
                    }`}
                  />
                  <i
                    className={`DownloadLines bg-gray-500 rotate-45  top-[48%] right-[38%] duration-500 ease-in ${
                      hover ? "bg-orange-400 " : ""
                    }`}
                  />
                  <i
                    className={`DownloadLines bg-gray-500 rounded -rotate-45  top-[48%] left-[36%] duration-500 ease-in ${
                      hover ? "bg-orange-400 " : ""
                    }`}
                  />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
