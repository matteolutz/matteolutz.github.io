import { Moment } from "moment";

export type ProjectType = "project" | "startup";

export type ProjectStatus = "wip" | "paused" | "done";

type Project = {
  type: ProjectType;
  date: Moment;
  name: string;
  description?: JSX.Element;
  image?: string;
  isFeatured: boolean;
  technologies: Array<string>;
  builtAt?: string;
  status: ProjectStatus;
  link: {
    other?: string;
    github?: string;
    linkedin?: string;
  };
  relatedPersons?: Array<{ name: string; link: string }>;
};

export default Project;
