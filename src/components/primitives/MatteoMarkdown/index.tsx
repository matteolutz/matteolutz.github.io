import { ComponentProps, FC, forwardRef, PropsWithChildren } from "react";
import Markdown from "react-markdown";

const MatteoMarkdown = forwardRef<
  typeof Markdown,
  ComponentProps<typeof Markdown>
>((props) => {
  return (
    <Markdown
      {...props}
      className="[&_a]:text-tertiary child-a-hover:underline [&_a]:underline-offset-2 [&_a]:transition-all"
    />
  );
});

export default MatteoMarkdown;
