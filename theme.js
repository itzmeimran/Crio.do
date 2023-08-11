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
    btn:{
      main:'#2DF8C5',
      background:'#07634C'
    },
    yellow:{
      main:'#FBD85D'
    }
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
});
