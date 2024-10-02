import cn from "@/utils/cn";
import { FC, forwardRef, HTMLProps } from "react";

const Link = forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement>>(
  (props, ref) => (
    <a
      {...props}
      className={cn(
        props.className,
        "text-tertiary hover:underline underline-offset-2 transition-all",
      )}
      ref={ref}
    />
  ),
);

Link.displayName = "Link";

export default Link;
