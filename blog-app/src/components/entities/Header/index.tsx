import { Image } from "@models";
import { Box } from "@mui/material";
import React from "react";

import { styles } from "./styles";

export type HeaderProps = {
  logo: Image;
};
export function Header() {
  return <Box sx={styles.wrapper}></Box>;
}
