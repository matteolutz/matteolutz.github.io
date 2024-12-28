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
import { BhdComponent, BhdContentBlockComponentProps } from "bhd-cms-react";
import Loader from "../primitives/Loader";

const BasicPage: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  const [blur, setBlur] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div {...bhdRoot({})} className="app">
      <Navbar setBlur={setBlur} />
      {contentBlock.content.overlayChildren.map((child: string) => (
        <BhdComponent key={child} contentBlockId={child} />
      ))}

      <div className={cn(blur && "blur", "transition-[filter]")}>
        <div className="w-full h-full flex justify-center max-[1400px]:px-24 max-lg:px-12 max-md:px-8">
          <div
            {...bhdField("children", {})}
            className="w-full max-w-[1000px] flex flex-col [&>section]:pt-20 [&>section]:w-full mb-20"
          >
            {contentBlock.content.children.map((child: string) => (
              <BhdComponent key={child} contentBlockId={child} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasicPage;
