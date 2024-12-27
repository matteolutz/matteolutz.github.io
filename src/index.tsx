import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { BhdContext } from "bhd-cms-react";
import Hero from "./components/sections/Hero";

import "bhd-cms-react/dist/styles.css";
import About from "./components/sections/About";
import AssetImage from "./components/primitives/AssetImage";
import Loader from "./components/primitives/Loader";
import BasicSection from "./components/sections/BasicSection";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BhdContext
      options={{
        accessToken: "1a910dd5-e3e4-49e7-ace3-d6472d2f56a0",
        loadingComponent: Loader,
        blueprintLut: {
          cm5715nuc0001csicndi9jnrp: Hero,
          cm571w8zj0005csicyu6kdgch: About,
          cm573081f000hcsic7eb96e2f: BasicSection,

          cm571wvyl0007csickattwmqf: AssetImage,
        },
      }}
    >
      <HashRouter>
        <App />
      </HashRouter>
    </BhdContext>
  </React.StrictMode>,
);
