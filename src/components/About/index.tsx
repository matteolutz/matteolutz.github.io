import React from 'react';
import me from "../../assets/png/me.png";
import meWorking from "../../assets/png/me_working.png";
import "./style.scss";

function About() {
    return (
        <section className="section-about section" id="about">
            <h1 className="numbered-heading">About me</h1>
            <div className="about-grid">
                <div className="about-grid__item">
                    <h2 className="small-heading heading-green-mono">This is me...</h2>
                    WIP
                </div>
                <div className="about-grid__item">
                    <img src={me} className="about-grid__image" alt="Portrait of myself" />
                </div>

                <div className="about-grid__item">
                    <img src={meWorking} className="about-grid__image" alt="Me working" />
                </div>
                <div className="about-grid__item">
                    <h2 className="small-heading heading-green-mono">..., programming</h2>
                    WIP
                </div>
            </div>
        </section>
    );
}

export default About;