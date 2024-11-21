import { ImageType } from "@models";
import { Box } from "@mui/material";
import Image from "next/image";

type ImageProps = {
  image: ImageType;
};

export function ImageComponent({ image }: ImageProps) {
  return (
    <Box>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    </Box>
  );
}
