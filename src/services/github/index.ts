import {IGithubUserInformation} from "../../feature/github/githubUserInformation";
import {IGithubRepo} from "../../feature/github/githubRepo";
import {IGithubRepoMLConfigFile} from "../../feature/github/githubRepoMlConfigFile";

export const getGithubUser = async (username: string): Promise<IGithubUserInformation | null> => {
    const userInfoJson: any = await (await fetch(`https://api.github.com/users/${username}`)).json();

    if (userInfoJson.message && userInfoJson.message === "Not Found") {
        return null;
    }

    return userInfoJson as IGithubUserInformation;
}

export const getMLConfigFile = async (repo: IGithubRepo): Promise<IGithubRepoMLConfigFile | null> => {

    const infoFile: any = await(await fetch(`https://raw.githubusercontent.com/matteolutz/${repo.name}/${repo.default_branch}/mlconf.json`)).json();

    return infoFile as IGithubRepoMLConfigFile;
}

export const getGithubRepos = async (username: string): Promise<Array<IGithubRepo>> => {
    const repoInfoJson: any = await (await fetch(`https://api.github.com/users/${username}/repos`)).json();

    if(repoInfoJson.message && repoInfoJson.message === "Not Found") {
        return Promise.reject("User not found");
    }

    return repoInfoJson.map((jsonRepo: any) => {
        return jsonRepo as IGithubRepo;
    });
}