import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", //white
      light: "#A9DACF", //light green
    },
    secondary: {
      main: "#F2FBF7",
      light: "",
    },
    olive: {
      main: "#07634C",
      light: "#2DF8C5",
    },
    btn: {
      main: "#2DF8C5",
      background: "#07634C",
    },
    yellow: {
      main: "#FBD85D",
    },
  },
  typography: {
    fontFamily: "",
    h1: {
      fontFamily: "Manrope, san-serif",
    },

    h2: {
      fontFamily: "Manrope, san-serif",
    },
    h3: {
      fontFamily: "Manrope, san-serif",
    },
    h4: {
      fontFamily: "Manrope, san-serif",
    },
    h5: {
      fontFamily: "Manrope, san-serif",
    },
    h6: {
      fontFamily: "Manrope, san-serif",
    },
    subtitle2: {
      fontFamily: "Rubik, san-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 320, // Mobile view - min-width: 320px
      sm: 481, // Tablet view - min-width: 481px
      md: 769, // Small screens, laptops - min-width: 769px
      lg: 1025, // Desktops, large screens - min-width: 1025px
      xl: 1201, // Extra large screens - min-width: 1201px
    },
  },
});
