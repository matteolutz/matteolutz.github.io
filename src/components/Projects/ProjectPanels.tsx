import React, {useEffect, useState} from 'react';
import {getGithubRepos} from "../../services/github";
import {IGithubRepo} from "../../feature/github/githubRepo";

function ProjectPanels() {

    const GH_USERNAME: string = "matteolutz";

    const [repos, setRepos] = useState<Array<IGithubRepo>>([]);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();


    useEffect(() => {
        getGithubRepos(GH_USERNAME)
            .then((repos: Array<IGithubRepo> | null) => {
                setLoaded(true);
                if(repos !== null) {
                    setRepos(repos);
                    setError(undefined);
                } else {
                    setRepos([]);
                    setError("Couldn't fetch repos");
                }
            });
    }, []);

    if(error) {
        return <div>There was an error, while fetching the data: {error}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {repos.map((repo: IGithubRepo) => (
                    <div>{repo.name}</div>
                ))}
            </div>
        );
    }
}

export default ProjectPanels;