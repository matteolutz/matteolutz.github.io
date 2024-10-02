import React, { FC } from "react";
import Navbar from "../Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import SocialOverlay from "../SocialOverlay";
import Footer from "../Footer";

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialOverlay />
      <div className="w-full h-full flex justify-center max-[1400px]:px-24 max-lg:px-12 max-md:px-8">
        <div className="w-full max-w-[1000px] flex flex-col gap-10 [&>section]:w-full mb-20">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
