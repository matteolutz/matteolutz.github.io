import React, {FC, useEffect, useState} from 'react';
import ProjectPanel from "../ProjectPanel";
import {IGithubRepo} from "../../feature/github/githubRepo";
import {getGithubRepos} from "../../services/github";
import "./style.scss";

const Projects: FC = () => {

    const [projects, setProjects] = useState<Array<IGithubRepo> | undefined>();

    useEffect(() => {
        if(projects === undefined) {
            getGithubRepos("matteolutz")
                .then((repos) => {
                    setProjects(repos);
                })
                .catch((_) => setProjects([]));
        }
    }, [projects]);

    return (
        projects === undefined ? <div>Loading...</div> :
        <section className="section section-projects" id="projects">
            <h1 className="numbered-heading">Projects</h1>
            <div className="project-panel-container">
                {projects.map((p) => <ProjectPanel project={p} />)}
            </div>
        </section>
    );

};

export default Projects;