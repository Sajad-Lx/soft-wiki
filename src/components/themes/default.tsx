import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    primary: {
      main: "#e06f5c",
    },
    secondary: {
      main: "#30475E",
    },
  },
});

export const dark = createTheme({
  palette: {
    mode: "dark",
  },
});