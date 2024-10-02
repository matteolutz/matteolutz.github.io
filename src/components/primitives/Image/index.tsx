import cn from "@/utils/cn";
import { FC, forwardRef, HTMLProps } from "react";

export type ImageProps = {
  src: HTMLProps<HTMLImageElement>["src"];
  caption: string;
} & HTMLProps<HTMLDivElement>;

const Image: FC<ImageProps> = ({ src, caption, ...rest }) => (
  <div
    {...rest}
    className={cn(rest.className, "flex flex-col items-center gap-2")}
  >
    <img className="w-full rounded-lg" src={src} alt={caption} />
    <p className="text-xs text-gray-500 font-mono">{caption}</p>
  </div>
);

export default Image;
