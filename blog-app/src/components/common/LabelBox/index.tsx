import { ImageType } from "@models";
import { Box } from "@mui/material";

type LabelBoxProps = {
  label: string;
  image: ImageType;
};
export function LabelBox({ label, image }: LabelBoxProps) {
  return <Box>{label}</Box>;
}
