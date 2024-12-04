"use client";
import { ImageComponent, SideMenu } from "@components/common";
import { useWindow } from "@hooks";
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
  const { dimension } = useWindow({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  return (
    <Box sx={styles.wrapper}>
      <Box>
        <ImageComponent image={headerLogo}></ImageComponent>
      </Box>
      <SideMenu hidden={dimension.width > 900} />
      <Box
        sx={{
          display: dimension.width < 900 ? "none" : "flex",
          gap: "50px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </Box>
      <Box
        sx={
          (styles.buttons,
          {
            display: dimension.width < 900 ? "none" : "flex",
          })
        }
      >
        <Button>Log in</Button>
        <Button variant="contained">Sign up</Button>
      </Box>
    </Box>
  );
}
