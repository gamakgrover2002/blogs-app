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
          fontSize: "0.1rem",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#d5bbfa",
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
