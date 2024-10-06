import React, { FC, useEffect, useRef, useState } from "react";
import logo from "@/assets/png/logo.png";
import { useRefState } from "@/hooks/react";
import cn from "@/utils/cn";
import { FaBars } from "react-icons/fa";
import MobileNavSidebar from "./mobile";
import { useIsVisible } from "@/hooks/dom";
import { HashLink } from "react-router-hash-link";

export const NAVBAR_LINKS: Array<{ name: string; href: string }> = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const Navbar: FC<{ setBlur: (blur: boolean) => void }> = ({ setBlur }) => {
  const [prevScrollPos, setPrevScrollPos, prevScrollPosRef] =
    useRefState<number>(window.scrollY);

  const [hidden, setHidden] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  const isSidebarContainerVisible = useIsVisible(sidebarContainerRef);
  useEffect(() => {
    sidebarOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    setBlur(sidebarOpen);
  }, [sidebarOpen]);

  useEffect(() => {
    if (isSidebarContainerVisible) return;
    setSidebarOpen(false);
  }, [isSidebarContainerVisible]);

  const handleScroll = (): void => {
    const currentScrollPos: number = Math.max(0, window.scrollY);

    const willBeHidden: boolean = prevScrollPosRef.current < currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setHidden(willBeHidden);
    setShadow(currentScrollPos !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "h-[70px]",
        "flex",
        "justify-between",
        "items-center",
        "py-4",
        "px-[3rem]",
        "max-md:px-[1.5rem]",
        "z-10",
        "font-mono",
        "transition-all",
        "bg-background-primary",
        "bg-opacity-85",
        "backdrop-blur",
        hidden && "-translate-y-full",
        shadow ? "shadow-navbar" : "h-[90px]",
      )}
    >
      <a
        href="/"
        className="text-secondary, flex items-center px-[0rem] h-[40px] cursor-pointer"
      >
        <img className="h-full" src={logo} alt="Matteo Lutz" />
      </a>

      <div className="flex items-center justify-center gap-4 flex-wrap max-sm:gap-y-1 max-md:hidden">
        {NAVBAR_LINKS.map(({ name, href }, idx) => (
          <HashLink
            key={idx}
            to={href}
            className="text-secondary cursor-pointer text-sm transition-colors hover:text-tertiary"
          >
            <span className="text-xs text-tertiary font-mono">*</span> {name}
          </HashLink>
        ))}
      </div>

      <div ref={sidebarContainerRef} className="hidden max-md:block">
        <button
          aria-label="Menu"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <FaBars className="text-tertiary text-xl" />
        </button>
        <MobileNavSidebar
          show={sidebarOpen}
          close={setSidebarOpen.bind(this, false)}
        />
      </div>
    </div>
  );
};

export default Navbar;
