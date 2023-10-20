import { TickCircle } from "iconsax-react";
import { useEffect, useState } from "react";

function Succses({ status, Massage }) {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    if (status) {
      setIsRendered(true);
    } else {
      // Delay the removal of the component to allow the fade-out animation to complete
      const timeout = setTimeout(() => {
        setIsRendered(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [status]);
  return (
    <div
      className={`bg-[#009688]/50 text-white  duration-200  max-w-[350px] min-w-[200px] backdrop-blur-[35px] py-4 px-4 rounded-r-2xl flex items-start justify-center flex-col fixed bottom-10 right-10 z-[100] ${
        isRendered ? "fade-in" : "fade-out"
      }`}
    >
      <div className="w-1 h-full absolute left-0 top-0 bg-[#009688]"></div>
      <div className="flex justify-start space-x-2 items-center">
        <TickCircle size="24" color="#009688" variant="Bold" />
        <h1 className="text-white font-semibold">Success</h1>
      </div>
      <div className="text-sm text-white text-left mt-1">{Massage}</div>
    </div>
  );
}

export default Succses;
