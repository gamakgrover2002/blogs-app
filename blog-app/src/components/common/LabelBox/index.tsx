import { ImageType } from "@models";
import { Box } from "@mui/material";
import Image from "next"
type LabelBoxProps = {
  label: string;
  image: ImageType;
};
export function LabelBox({ label, image }: LabelBoxProps) {
  return <Box>
    <Image
    {label}</Box>;
}
