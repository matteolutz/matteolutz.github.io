import { FC } from "react";
import Link from "../primitives/Link";

export const FOOTER_HEIGHT = 50;

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={`w-full min-h-[50px] flex-col`}>
      <div className="size-full text-xs font-mono flex flex-col justify-center items-center py-4">
        <span>(c) {year} Matteo Lutz</span>
        <span>
          Design based on{" "}
          <Link target="_blank" href="https://brittanychiang.com/">
            @brittanychiang
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
