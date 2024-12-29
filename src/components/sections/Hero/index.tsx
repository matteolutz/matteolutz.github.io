import MatteoMarkdown from "@/components/primitives/MatteoMarkdown";
import PrimitiveLink from "@/components/primitives/PrimitiveLink";
import { BhdContentBlockComponentProps } from "bhd-cms-react";
import { FC } from "react";
import Markdown from "react-markdown";

const Hero: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => (
  <section
    {...bhdRoot({
      className: "flex flex-col justify-center min-h-[100vh] relative",
      id: "home",
    })}
  >
    <h3
      {...bhdField("heyText", {})}
      className="font-mono font-normal mb-6 text-base text-tertiary"
    >
      {contentBlock.content.heyText}
    </h3>
    <h1
      {...bhdField("nameText", {})}
      className="text-7xl text-secondary font-semibold max-md:text-5xl max-sm:text-3xl"
    >
      {contentBlock.content.nameText}
    </h1>
    <h1
      {...bhdField("subNameText", {})}
      className="text-7xl text-primary font-semibold max-md:text-5xl max-sm:text-3xl"
    >
      {contentBlock.content.subNameText}
    </h1>
    <div
      {...bhdField("infoText", {})}
      className="mt-6 w-full max-w-[540px] text-base"
    >
      <MatteoMarkdown>{contentBlock.content.infoText}</MatteoMarkdown>
    </div>
  </section>
);

export default Hero;
