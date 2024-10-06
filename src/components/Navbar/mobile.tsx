import { FC } from "react";
import { useSpring, animated } from "react-spring";
import { FaTimes } from "react-icons/fa";
import { NAVBAR_LINKS } from ".";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileNavSidebar: FC<{ show: boolean; close: () => void }> = ({
  show,
  close,
}) => {
  const animatedProps = useSpring({
    right: show ? "0" : "-100%",
  });

  return (
    <animated.div
      style={{ right: animatedProps.right }}
      className="fixed z-20 top-0 w-[min(75vw,400px)] h-[100vh] bg-background-tertiary shadow-mobile-navbar"
    >
      <div className="flex flex-col w-full h-full">
        <div className="w-full py-6 px-[1.5rem] flex justify-end">
          <button onClick={close.bind(this)}>
            <FaTimes className="text-tertiary text-xl" />
          </button>
        </div>
        <div className="flex flex-col w-full h-full items-center justify-center gap-12">
          {NAVBAR_LINKS.map(({ name, href }, idx) => (
            <HashLink
              key={idx}
              to={href}
              onClick={close.bind(this)}
              className="text-secondary cursor-pointer text-base transition-colors hover:text-tertiary"
            >
              <span className="text-sm text-tertiary font-mono">*</span> {name}
            </HashLink>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default MobileNavSidebar;
