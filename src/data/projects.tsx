import Project from "@/models/project";
import moment from "moment";

import demexPng from "@/assets/png/projects/demex.png";
import umberPng from "@/assets/png/projects/umber.png";
import icsbrainPng from "@/assets/png/projects/icsbrain.png";

export const PROJECTS: Array<Project> = [
  {
    type: "project",
    name: "Umber",
    status: "paused",
    date: moment("2022-03"),
    description: (
      <p>
        Umber is a compiled (soon multiparadigm) programming language, with it's
        current compiler implemented in Rust.
      </p>
    ),
    image: umberPng,
    technologies: ["Rust", "Umber"],
    isFeatured: true,
    link: {
      github: "https://github.com/matteolutz/umber-lang",
    },
  },
  {
    type: "startup",
    name: "icsbrain",
    status: "wip",
    date: moment("2022-11"),
    description: (
      <p>
        The open source school cloud for perfect integration into everyday
        learning life.
        <br />
        The aim of icsbrain is, to provide a stable and scalable service that
        integrates perfectly into everyday school life. The business idea
        originated from the founders problem with other platforms.
      </p>
    ),
    image: icsbrainPng,
    technologies: [
      "NodeJS",
      "Typescript",
      "PostgresSQL",
      "Docker",
      "React",
      "Flutter",
      "tvOS",
    ],
    isFeatured: true,
    link: {
      github: "https://github.com/icsbrain",
      linkedin: "https://www.linkedin.com/company/icsbrain",
      other: "https://icsbrain.com",
    },
    relatedPersons: [
      {
        name: "Adrian Haupt",
        link: "https://www.linkedin.com/in/adrian-haupt/",
      },
    ],
    otherRelations: [
      {
        name: "Karl-Maybach-Gymnasium",
        link: "https://kmg-fn.de",
      },
    ],
  },
  {
    type: "project",
    name: "demex",
    status: "wip",
    date: moment("2024-05"),
    description: (
      <p>
        demex is a command based DMX-Lighting control application written in
        Rust. It's command syntax and functionality is heavily inspired by the{" "}
        <i className="text-tertiary">ETC Eos</i> family and{" "}
        <i className="text-tertiary">MA</i> family of lighting consoles.
      </p>
    ),
    image: demexPng,
    technologies: ["Rust", "eframe", "egui", "DMX", "Art-Net"],
    isFeatured: true,
    link: {
      github: "https://github.com/matteolutz/demex",
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.isFeatured);
