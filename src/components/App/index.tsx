import { FC, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import SocialOverlay from "../SocialOverlay";
import Footer from "../Footer";
import cn from "@/utils/cn";
import { Route, Routes, useLocation } from "react-router-dom";

const App: FC = () => {
  const [blur, setBlur] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Navbar setBlur={setBlur} />
      <SocialOverlay />
      <Routes>
        <Route
          path="/"
          element={
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
            </div>
          }
        />
        <Route
          path="archive"
          element={
            <div className="w-full h-screen flex justify-center items-center">
              Archive
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <h1 className="text-9xl font-mono text-tertiary">404</h1>
              <h2 className="text-6xl">Page not found</h2>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
