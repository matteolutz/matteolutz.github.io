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
