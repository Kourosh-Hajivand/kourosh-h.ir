import { getCookie, hasCookie } from "cookies-next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Aboutme from "../Components/Aboutme";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import { ChangeData } from "../Store/DataReducer";
import Data from "../Data/Info";
import { changelan } from "../Store/LanguageReducer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Cookie = hasCookie("Languages");
    const lan = getCookie("Languages");
    if (Cookie && lan === "FA") {
      dispatch(changelan("FA"));
      dispatch(ChangeData(Data.FA));
    } else if (Cookie && lan === "EN") {
      dispatch(changelan("EN"));
      dispatch(ChangeData(Data.EN));
    } else {
      return;
    }
  });
  return (
    <div>
      <Head>
        <title>Kourosh H</title>
      </Head>
      <main className="font-Rubik">
        <section>
          <Hero />
        </section>
        <section>
          <Aboutme />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Resume />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
