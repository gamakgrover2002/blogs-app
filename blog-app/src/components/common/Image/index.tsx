import { ImageType } from "@models";
import { Box } from "@mui/material";

type ImageProps = {
  image: ImageType;
};
function Image({ image }: ImageProps) {
  return (
    <Box>
      <Image alt={image.alt} src={image.src} />
    </Box>
  );
}

export default Image;
