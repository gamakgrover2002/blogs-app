import { ImageComponent } from "@components/common";
import { ImageType } from "@models";
import { Box, Button } from "@mui/material";

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
        <ImageComponent image={headerLogo}></ImageComponent>
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
