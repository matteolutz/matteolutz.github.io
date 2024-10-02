import { IGithubRepo } from "@/feature/github/githubRepo";
import { FC } from "react";
import "./style.scss";
import { FaStar } from "react-icons/fa";

type ProjectPanelProps = {
  project: IGithubRepo;
};

const ProjectPanel: FC<ProjectPanelProps> = ({ project }) => {
  const openProject = () => {
    window.open(project.html_url, "_blank");
  };

  return (
    <div className="project-panel" onClick={openProject}>
      <h3 className="project-panel__heading">{project.name}</h3>
      <p className="project-panel__description">
        {project.description || (
          <span className="project-panel__no-desc">
            [ No description available ]
          </span>
        )}
      </p>
      <p className="project-panel__stars">
        <FaStar /> <span>{project.stargazers_count}</span>
      </p>
    </div>
  );
};

export default ProjectPanel;
