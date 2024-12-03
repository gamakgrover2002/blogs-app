"use client";
import { ImageComponent, SideMenu } from "@components/common";
import { ImageType } from "@models";
import { Box, Button } from "@mui/material";
import Link from "next/link";

import { styles } from "./styles";

const headerLogo: ImageType = {
  src: "/icons/logo.png",
  alt: "logo",
  width: 50,
  height: 50,
};

export function Header() {
  return (
    <Box sx={styles.wrapper}>
      <Box>
        <SideMenu />
        <ImageComponent image={headerLogo}></ImageComponent>
      </Box>
      <Box sx={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </Box>
      <Box sx={styles.buttons}>
        <Button>Log in</Button>
        <Button variant="contained">Sign up</Button>
      </Box>
    </Box>
  );
}
