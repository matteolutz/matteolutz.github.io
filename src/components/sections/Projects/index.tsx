import { FC } from "react";
import SectionHeading from "@/components/primitives/SectionHeading";
import { FEATURED_PROJECTS } from "@/data/projects";
import cn from "@/utils/cn";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimitiveLink from "@/components/primitives/PrimitiveLink";

const Projects: FC = () => {
  return (
    <section className="section section-projects" id="projects">
      <SectionHeading heading="Projects" />
      <ul className="list-none flex flex-col items-center gap-14">
        {FEATURED_PROJECTS.sort(
          (a, b) => b.date.valueOf() - a.date.valueOf(),
        ).map((project, idx) => (
          <li
            key={idx}
            className="grid grid-cols-12 items-center gap-2 w-full max-md:flex max-md:border max-md:border-background-secondary max-md:rounded max-md:p-6"
          >
            <div
              className={cn(
                "area z-[1] relative flex flex-col gap-4 max-md:text-left",
                idx % 2 == 0 && "text-right",
              )}
              style={{
                gridArea: idx % 2 != 0 ? "1 / 1 / -1 / 7" : "1 / 7 / -1 / -1",
              }}
            >
              <div
                className={cn(
                  "flex flex-col gap-2 max-md:items-start",
                  idx % 2 == 0 && "items-end",
                )}
              >
                <p className="text-xs font-mono text-tertiary">
                  Featured{" "}
                  {
                    {
                      project: "Project",
                      startup: "Start-Up",
                    }[project.type]
                  }
                </p>
                <h3 className="text-3xl font-semibold">
                  <a
                    target="_blank"
                    className="text-primary hover:text-tertiary transition-colors"
                    href={
                      project.link.other ??
                      project.link.github ??
                      "javascript:void(0)"
                    }
                  >
                    {project.name}
                  </a>
                </h3>
              </div>
              <div className="bg-[#112240] p-6 text-base shadow-project flex flex-col gap-4 rounded">
                <div>{project.description}</div>
                {project.relatedPersons &&
                  project.relatedPersons.length > 0 && (
                    <div className="text-xs font-mono flex gap-x-2 flex-wrap">
                      Related people:&nbsp;
                      {project.relatedPersons.map((person, idx) => (
                        <PrimitiveLink
                          key={idx}
                          target="_blank"
                          className="font-mono"
                          href={person.link}
                        >
                          {person.name}
                        </PrimitiveLink>
                      ))}
                    </div>
                  )}
              </div>
              <div
                className={cn(
                  "flex gap-x-4 font-mono text-xs flex-wrap max-md:justify-start",
                  idx % 2 == 0 && "justify-end",
                )}
              >
                {project.technologies.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <div
                className={cn(
                  "flex gap-4 text-sm items-center max-md:flex-row",
                  idx % 2 == 0 && "flex-row-reverse",
                )}
              >
                {Object.keys(project.link)
                  .sort((a, b) => a.localeCompare(b))
                  .map((key, idx) => (
                    <a
                      key={idx}
                      target="_blank"
                      className="text-primary hover:text-tertiary transition-colors"
                      href={project.link[key as keyof typeof project.link]}
                    >
                      {
                        {
                          github: <FaGithub />,
                          other: <FaExternalLinkAlt />,
                          linkedin: <FaLinkedin />,
                        }[key as keyof typeof project.link]
                      }
                    </a>
                  ))}
                {
                  {
                    wip: (
                      <span className="font-mono text-xs border border-red-500 text-red-500 p-1 rounded cursor-default">
                        • WIP
                      </span>
                    ),
                    paused: (
                      <span className="font-mono text-xs border border-orange-500 text-orange-500 p-1 rounded cursor-default">
                        Paused
                      </span>
                    ),
                    done: <></>,
                  }[project.status]
                }
              </div>
            </div>
            <div
              className="relative max-md:hidden"
              style={{
                gridArea: idx % 2 != 0 ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 8",
              }}
            >
              <a
                target="_blank"
                className="w-full"
                href={
                  project.link.other ??
                  project.link.github ??
                  "javascript:void(0)"
                }
              >
                <img
                  className="w-full rounded shadow-project"
                  src={project.image}
                  alt={project.name}
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center w-full mt-20 font-mono text-xs">
        Want to see more?
        <Link
          to="archive"
          className="text-base text-tertiary hover:underline underline-offset-2 transition-all"
        >
          View the archive
        </Link>
      </div>
    </section>
  );
};

export default Projects;
