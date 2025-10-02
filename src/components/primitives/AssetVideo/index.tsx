import { BhdContentBlockComponentProps, useBhdContext } from "bhd-cms-react";
import { FC } from "react";
import Image from "../Image";

const AssetVideo: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  const { getAssetUrl } = useBhdContext();

  return (
    <video {...bhdRoot({})} {...bhdField("video", {})} controls>
      <source src={getAssetUrl(contentBlock.content.video)} type="video/mp4" />
    </video>
  );
};

export default AssetVideo;
