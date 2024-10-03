import React, { FC, useState } from "react";
import Navbar from "../Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import SocialOverlay from "../SocialOverlay";
import Footer from "../Footer";
import cn from "@/utils/cn";

const App: FC = () => {
  const [blur, setBlur] = useState<boolean>(false);

  return (
    <div className="app">
      <Navbar setBlur={setBlur} />
      <SocialOverlay />
      <div className={cn(blur && "blur", "transition-[filter]")}>
        <div className="w-full h-full flex justify-center max-[1400px]:px-24 max-lg:px-12 max-md:px-8">
          <div className="w-full max-w-[1000px] flex flex-col [&>section]:pt-20 [&>section]:w-full mb-20">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
