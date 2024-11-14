import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

import { styles } from "./styles";

export function Header() {
  return (
    <Box sx={styles.wrapper}>
      <Box>
        <Image width={50} height={50} alt="logo" src="/icons/logo.png"></Image>
      </Box>
      <Box sx={styles.menu}>
        <p>Home</p>
        <p>Blogs</p>
        <p>Contact</p>
      </Box>
      <Box sx={styles.buttons}>
        <Button variant="contained">Log in</Button>
        <Button>Sign up</Button>
      </Box>
    </Box>
  );
}
