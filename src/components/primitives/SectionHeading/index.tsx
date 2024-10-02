import { FC, PropsWithChildren, useContext } from "react";

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({ heading }) => (
  <h2 className="mb-5 gap-4 text-primary flex items-center font-semibold after:block after:h-[1px] after:w-full after:bg-background-secondary">
    <span className="text-xl max-md:text-base font-mono text-tertiary">*</span>
    <span className="flex-shrink-0 text-4xl max-md:text-2xl max-sm:text-xl">
      {heading}
    </span>
  </h2>
);

export default SectionHeading;
