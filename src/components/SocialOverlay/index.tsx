import { useWindowScrollBottom } from "@/hooks/dom";
import cn from "@/utils/cn";
import React, { FC, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_OVERLAY_ITEMS = [
  {
    icon: FaGithub,
    link: "https://github.com/matteolutz",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/matteo-lutz",
  },
  {
    icon: FaEnvelope,
    link: "mailto:info@matteolutz.de",
  },
];

const SocialOverlay: FC = () => {
  return (
    <div className="z-10 fixed left-[3rem] w-[20px] max-lg:hidden bottom-0">
      <ul className="list-none gap-5 flex flex-col items-center justify-end after:content-normal w-[1.5px] h-[min(100px,10vh)] bg-secondary">
        {SOCIAL_OVERLAY_ITEMS.map(({ icon: Icon, link }, idx) => (
          <li key={idx} className="last-of-type:mb-[min(100px,10vh)]">
            <a
              target="_blank"
              className="text-secondary text-xl"
              href={link}
              rel="noreferrer"
            >
              <Icon className="transition-[transform,colors] hover:text-tertiary hover:-translate-y-[0.15rem]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialOverlay;
