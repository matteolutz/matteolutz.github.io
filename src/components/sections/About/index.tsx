import React, { FC } from "react";
import "./style.scss";
import SectionHeading from "@/components/primitives/SectionHeading";
import Link from "@/components/primitives/Link";
import mePng from "@/assets/png/me.png";

const About: FC = () => (
  <section className="section-about section" id="about">
    <SectionHeading heading="About Me" />
    <div
      className="grid gap-10 max-md:flex max-md:flex-col max-md:items-center"
      style={{ gridTemplateColumns: "3fr 2fr" }}
    >
      <div className="w-full flex flex-col gap-5 text-base">
        <p>
          Hey! My name is Matteo, and I'm a passionate computer science student
          with a strong background in programming and software development. I
          graduated from{" "}
          <Link target="_blank" href="https://kmg-fn.de/">
            Karl-Maybach-Gymnasium
          </Link>{" "}
          in Friedrichshafen with top grades in Mathematics, Computer Science,
          and English, and I'm currently pursuing a Bachelor's degree in
          Computer Science at the{" "}
          <Link href="https://tum.de" target="_blank">
            Technische Universität München
          </Link>
        </p>
        <p>
          Since an early age, I’ve been fascinated by technology, actively
          participating in robotics and programming projects. I’ve led various
          school initiatives, such as the Robotics group, where I taught younger
          students to experiment with technology. I’m also proud to have
          developed a complete software solution designed to streamline
          administrative processes in schools.
        </p>
        <p>
          My programming experience spans a wide range of projects, from
          frequent participation in{" "}
          <Link
            target="_blank"
            href="https://www.hacktothefuture.de/de/startseite"
          >
            HTTF Hackathons
          </Link>{" "}
          and the{" "}
          <Link target="_blank" href="https://bwinf.de/bundeswettbewerb/">
            Bundeswettbewerb Informatik (BWINF)
          </Link>{" "}
          to software development for the F1-in-Schools team{" "}
          <Link target="_blank" href="https://evolut1on.de/">
            evolut1on
          </Link>{" "}
          which will represent Germany at the World Finals in Saudi Arabia this
          year. Additionally, I have experience in website development for
          private clients and small businesses, and I’ve even designed and
          implemented <Link href="#projects">my own programming language</Link>{" "}
          along with its compiler. I'm always eager to apply my skills in
          innovative projects and am particularly interested in machine
          learning, software development, and microcontroller programming.
        </p>
      </div>
      <div className="w-full max-md:max-w-[300px]">
        <img className="w-full rounded-lg" alt="Me!" src={mePng} />
      </div>
    </div>
  </section>
);

export default About;
