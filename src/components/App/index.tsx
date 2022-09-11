import React from 'react';
import Navbar from "../Navbar/";
import Social from "../Social";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import "./style.scss"

function App() {
    return (
        <div className="app">
            <Navbar/>
            <Social/>
            <div className="main-content">
                <Home />
                <About />
                <Projects />
            </div>
        </div>
    );
}

export default App;
