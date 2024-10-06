import { Moment } from "moment";

export type ProjectType = "project" | "startup";

export type ProjectStatus = "wip" | "paused" | "done";

export type ProjectRelation = {
  name: string;
  link: string;
};

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
  relatedPersons?: Array<ProjectRelation>;
  otherRelations?: Array<ProjectRelation>;
};

export default Project;
