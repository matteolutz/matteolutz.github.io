import { FC } from "react";
import PrimitiveLink from "../primitives/PrimitiveLink";

export const FOOTER_HEIGHT = 50;

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={`w-full min-h-[50px] flex-col mt-16`}>
      <div className="size-full text-xs font-mono flex flex-col justify-center items-center py-4">
        <span>(c) {year} Matteo Lutz</span>
        <span>
          Design based on{" "}
          <PrimitiveLink target="_blank" href="https://brittanychiang.com/">
            @brittanychiang
          </PrimitiveLink>
        </span>
      </div>
    </div>
  );
};

export default Footer;
