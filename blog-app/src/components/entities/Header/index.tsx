import { ImageType } from "@models";
import { Box } from "@mui/material";
import React from "react";

import { styles } from "./styles";

export type HeaderProps = {
  logo: ImageType;
};
export function Header() {
  return <Box sx={styles.wrapper}>LOGO</Box>;
}
