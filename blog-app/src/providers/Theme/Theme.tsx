"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          width: "100px",
          height: "40px",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#0000FF",
    },
  },
});

export function Theme({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
