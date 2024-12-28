import MatteoMarkdown from "@/components/primitives/MatteoMarkdown";
import PrimitiveLink from "@/components/primitives/PrimitiveLink";
import cn from "@/utils/cn";
import {
  BhdComponent,
  BhdContentBlockComponentProps,
  BhdInlineComponent,
} from "bhd-cms-react";
import { FC } from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const ProjectComponent: FC<BhdContentBlockComponentProps<{ idx: number }>> = ({
  contentBlock,
  bhdRoot,
  bhdField,
  options,
}) => {
  const idx = options?.idx ?? 0;

  return (
    <li
      {...bhdRoot({})}
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
          <p
            {...bhdField("type", {})}
            className="text-xs font-mono text-tertiary"
          >
            Featured {["Project", "Start-Up"][contentBlock.content.type]}
          </p>
          <h3 className="text-3xl font-semibold">
            <a
              target="_blank"
              className="text-primary hover:text-tertiary transition-colors"
              href={
                contentBlock.content.links.length > 0
                  ? contentBlock.content.links[0]
                  : "javascript:void(0)"
              }
            >
              {contentBlock.content.name}
            </a>
          </h3>
        </div>
        <div className="bg-[#112240] p-6 text-base shadow-project flex flex-col gap-4 rounded">
          <MatteoMarkdown {...bhdField("description", {})}>
            {contentBlock.content.description}
          </MatteoMarkdown>
          {((contentBlock.content.relatedPersons?.length ?? 0) > 0 ||
            (contentBlock.content.otherRelations?.length ?? 0) > 0) && (
            <div className="flex flex-col gap-y-1">
              {contentBlock.content.relatedPersons &&
                contentBlock.content.relatedPersons.length > 0 && (
                  <div
                    {...bhdField("relatedPersons", {})}
                    className="text-xs font-mono flex gap-x-2 flex-wrap"
                  >
                    Related people:
                    {contentBlock.content.relatedPersons.map((person, idx) => (
                      <BhdInlineComponent key={idx} contentBlockId={person}>
                        {({ contentBlock: relatedPersonContentBlock }) => (
                          <PrimitiveLink
                            key={idx}
                            target="_blank"
                            className="font-mono"
                            href={relatedPersonContentBlock.content.link}
                          >
                            {relatedPersonContentBlock.content.name}
                          </PrimitiveLink>
                        )}
                      </BhdInlineComponent>
                    ))}
                  </div>
                )}

              {contentBlock.content.otherRelations &&
                contentBlock.content.otherRelations.length > 0 && (
                  <div
                    {...bhdField("otherRelations", {})}
                    className="text-xs font-mono flex gap-x-2 flex-wrap"
                  >
                    Other relations:
                    {contentBlock.content.otherRelations.map((rel, idx) => (
                      <BhdInlineComponent key={idx} contentBlockId={rel}>
                        {({ contentBlock: relationContentBlock }) => (
                          <PrimitiveLink
                            key={idx}
                            target="_blank"
                            className="font-mono"
                            href={relationContentBlock.content.link}
                          >
                            {relationContentBlock.content.name}
                          </PrimitiveLink>
                        )}
                      </BhdInlineComponent>
                    ))}
                  </div>
                )}
            </div>
          )}
        </div>
        <div
          {...bhdField("technologies", {})}
          className={cn(
            "flex gap-x-4 font-mono text-xs flex-wrap max-md:justify-start",
            idx % 2 == 0 && "justify-end",
          )}
        >
          {contentBlock.content.technologies.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        <div
          {...bhdField("links", {})}
          className={cn(
            "flex gap-4 text-sm items-center max-md:flex-row",
            idx % 2 == 0 && "flex-row-reverse",
          )}
        >
          {contentBlock.content.links
            .sort((a, b) => a.localeCompare(b))
            .map((link, idx) => (
              <a
                key={idx}
                target="_blank"
                className="text-primary hover:text-tertiary transition-colors"
                href={link}
              >
                {link.includes("github") ? (
                  <FaGithub />
                ) : link.includes("linkedin") ? (
                  <FaLinkedin />
                ) : (
                  <FaExternalLinkAlt />
                )}
              </a>
            ))}
          {
            [
              <span className="font-mono text-xs border border-red-500 text-red-500 p-1 rounded cursor-default">
                • WIP
              </span>,
              <span className="font-mono text-xs border border-orange-500 text-orange-500 p-1 rounded cursor-default">
                Paused
              </span>,
              <></>,
            ][contentBlock.content.status]
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
            contentBlock.content.links.length > 0
              ? contentBlock.content.links[0]
              : "javascript:void(0)"
          }
        >
          <BhdComponent
            {...bhdField("image", {})}
            contentBlockId={contentBlock.content.image}
          />
        </a>
      </div>
    </li>
  );
};

export default ProjectComponent;
