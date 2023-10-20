import { getCookie, hasCookie, setCookie, setCookies } from "cookies-next";
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
import Script from "next/script";
import Skill from "../Components/Skill";
import ContactMe from "../Components/ContactMe";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Cookie = hasCookie("Languages");
    setCookie("Languages", "EN");
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
        <title>Kourosh H Front End Developer</title>
        <meta
          name="google-site-verification"
          content="88-CJGrz1gfhh7e48oy89RfV22Virswfj5CrG-arL90"
        />
        <meta
          name="description"
          content="Kourosh Hajivand FrontEnd Developer React"
        />
        <meta
          name="keywords"
          content="React React.js Nextjs Next.js FrontEnd front developer hire tailwind html css javascript typescript JS TS JSX jsx "
        />
        <meta name="author" content="KouroshH" />
        <link rel="icon" type="image/png" sizes="32x22" href="/Logo1.png" />
        <meta property="og:image" content="/LogoOG.png" />
      </Head>

      <main className="font-Rubik scroll-smooth ">
        <section>
          <Hero />
        </section>
        <section>
          <Aboutme />
        </section>
        <section>
          <Skill />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Resume />
        </section>
        <section>
          <ContactMe />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
