import { useEffect, useState } from "react";

export const useWindowScrollBottom = (): number => {
  const [state, setState] = useState<number>(Infinity);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;
    setState(scrollBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return state;
};

export const useIsVisible = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};
