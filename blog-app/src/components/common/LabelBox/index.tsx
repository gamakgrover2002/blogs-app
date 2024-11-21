import { ImageType } from "@models";
import { Box } from "@mui/material";

import { ImageComponent } from "../ImageComponent";

type LabelBoxProps = {
  label: string;
  image: ImageType;
};

export function LabelBox({ label, image }: LabelBoxProps) {
  return (
    <Box>
      <ImageComponent image={image} />
      {label}
    </Box>
  );
}
