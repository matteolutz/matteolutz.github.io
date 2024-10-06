import cn from "@/utils/cn";
import { forwardRef, HTMLProps } from "react";

const PrimitiveLink = forwardRef<
  HTMLAnchorElement,
  HTMLProps<HTMLAnchorElement>
>((props, ref) => (
  <a
    {...props}
    className={cn(
      props.className,
      "text-tertiary hover:underline underline-offset-2 transition-all",
    )}
    ref={ref}
  />
));

PrimitiveLink.displayName = "PrimitiveLink";

export default PrimitiveLink;
