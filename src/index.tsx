import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { BhdComponent, BhdContext, BhdContextOptions } from "bhd-cms-react";
import Hero from "./components/sections/Hero";

import "bhd-cms-react/dist/styles.css";
import About from "./components/sections/About";
import AssetImage from "./components/primitives/AssetImage";
import { LoaderPage } from "./components/primitives/Loader";
import BasicSection from "./components/sections/BasicSection";
import ProjectComponent from "./components/sections/Projects/project";
import Projects from "./components/sections/Projects";
import BasicPage from "./components/BasicPage";
import SocialOverlay from "./components/SocialOverlay";
import PrimitiveLink from "./components/primitives/PrimitiveLink";
import AssetVideo from "./components/primitives/AssetVideo";

const container = document.getElementById("root");
const root = createRoot(container!);

const options: BhdContextOptions = {
  accessToken: "1a910dd5-e3e4-49e7-ace3-d6472d2f56a0",
  loadingComponent: LoaderPage,
  errorComponent: () => (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="text-7xl text-primary font-semibold max-md:text-5xl max-sm:text-3xl">
        Something went wrong :(
      </h1>
      <div className="text-lg">
        Please return <PrimitiveLink href="/">Home</PrimitiveLink>.
      </div>
    </div>
  ),
  blueprintLut: {
    cm5715nuc0001csicndi9jnrp: Hero,
    cm571w8zj0005csicyu6kdgch: About,
    cm588mbze000ls6ih0dpws0cp: Projects,
    cm573081f000hcsic7eb96e2f: BasicSection,

    cm5871ew20003s6ih86x3xaik: ProjectComponent,

    cm571wvyl0007csickattwmqf: AssetImage,
    cmg9ydww0000rmx23br2n87lx: AssetVideo,
    cm589e6ly000vs6ihor1up8oo: SocialOverlay,

    cm518efip0004wvrmx3olq8fk: BasicPage,
  },
};

const App = () => {
  const { pathname } = useLocation();

  let slug = pathname.split("/")[1]?.trim();
  if (!slug || slug === "") slug = "cm518efit0006wvrmipkyciy3";

  return <BhdComponent contentBlockId={slug} />;
};

root.render(
  <React.StrictMode>
    <HashRouter>
      <BhdContext options={options}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BhdContext>
    </HashRouter>
  </React.StrictMode>,
);
