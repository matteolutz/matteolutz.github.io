import React, { FC, useEffect, useState } from "react";
import "./style.scss";
import { IGithubRepo } from "@/feature/github/githubRepo";
import { getGithubRepos } from "@/services/github";
import ProjectPanel from "@/components/primitives/ProjectPanel";
import SectionHeading from "@/components/primitives/SectionHeading";

const Projects: FC = () => {
  const [projects, setProjects] = useState<Array<IGithubRepo> | undefined>();

  useEffect(() => {
    if (projects === undefined) {
      getGithubRepos("matteolutz")
        .then((repos) => {
          setProjects(repos);
        })
        .catch((_) => setProjects([]));
    }
  }, [projects]);

  return projects === undefined ? (
    <div>Loading...</div>
  ) : (
    <section className="section section-projects" id="projects">
      <SectionHeading heading="Projects" />
      ...
    </section>
  );
};

export default Projects;
