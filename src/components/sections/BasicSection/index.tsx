import MatteoMarkdown from "@/components/primitives/MatteoMarkdown";
import SectionHeading from "@/components/primitives/SectionHeading";
import { BhdContentBlockComponentProps } from "bhd-cms-react";
import { FC } from "react";

const BasicSection: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => (
  <section {...bhdRoot({})} className="section h-[65vh]" id={contentBlock.id}>
    <div className="w-full h-full flex justify-center items-center flex-col">
      <SectionHeading
        {...bhdField("heading", {})}
        heading={contentBlock.content.heading}
      />
      <div
        {...bhdField("content", {})}
        className="w-full max-w-[600px] flex justify-center items-center text-center flex-col gap-10"
      >
        {contentBlock.content.content.map((text, idx) => (
          <MatteoMarkdown key={idx}>{text}</MatteoMarkdown>
        ))}
      </div>
    </div>
  </section>
);

export default BasicSection;
