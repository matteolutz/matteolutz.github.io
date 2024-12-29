import { FC } from "react";
import SectionHeading from "@/components/primitives/SectionHeading";
import { FEATURED_PROJECTS } from "@/data/projects";
import cn from "@/utils/cn";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimitiveLink from "@/components/primitives/PrimitiveLink";
import { BhdComponent, BhdContentBlockComponentProps } from "bhd-cms-react";

const Projects: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  return (
    <section
      {...bhdRoot({})}
      className="section section-projects"
      id="projects"
    >
      <SectionHeading heading="Projects" />
      <ul
        {...bhdField("projects", {})}
        className="list-none flex flex-col items-center gap-14"
      >
        {contentBlock.content.projects.map((project, idx) => (
          <BhdComponent key={idx} options={{ idx }} contentBlockId={project} />
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center w-full mt-20 font-mono text-xs">
        Want to see more?
        <Link
          to={contentBlock.content.archivePage}
          className="text-base text-tertiary hover:underline underline-offset-2 transition-all"
        >
          View the archive
        </Link>
      </div>
    </section>
  );
};

export default Projects;
