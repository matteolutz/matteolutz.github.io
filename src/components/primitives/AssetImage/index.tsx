import { BhdContentBlockComponentProps, useBhdContext } from "bhd-cms-react";
import { FC } from "react";
import Image from "../Image";

const AssetImage: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  const { getAssetUrl } = useBhdContext();

  return (
    <Image
      {...bhdRoot({})}
      {...bhdField("asset", {})}
      src={getAssetUrl(contentBlock.content.asset)}
      caption={contentBlock.content.alt}
      captionsProps={bhdField("alt", {})}
      alt={contentBlock.content.alt}
    />
  );
};

export default AssetImage;
