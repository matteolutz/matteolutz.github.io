import { ComponentProps, FC, forwardRef, PropsWithChildren } from "react";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

const MatteoMarkdown = forwardRef<
  typeof Markdown,
  ComponentProps<typeof Markdown>
>((props) => {
  return (
    <Markdown
      {...props}
      rehypePlugins={[[rehypeExternalLinks, { target: "_blank" }]]}
      className="[&_a]:text-tertiary child-a-hover:underline [&_a]:underline-offset-2 [&_a]:transition-all [&_em]:text-tertiary"
    />
  );
});

export default MatteoMarkdown;
