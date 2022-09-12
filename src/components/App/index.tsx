import React, {FC} from 'react';
import Navbar from "../Navbar/";
import Social from "../Social";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import "./style.scss"
import Experience from "../Experience";
import Contact from "../Contact";

const App: FC = () => (
    <div className="app">
        <Navbar/>
        <Social/>
        <div className="main-content">
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    </div>
);

export default App;
