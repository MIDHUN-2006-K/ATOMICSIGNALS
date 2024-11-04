// File: src/theme/lightTheme.js
const lightTheme = {
  typography: {
    fontFamily: "Poppins",
    // fontSize: 12.25, // Don't change this if it affects default size
  },
  palette: {
    text: {
      primary: "#353448",
      secondary: "#000000",
      disabled: "#B9B9B9",
    },
    primary: {
      main: "#49C792",
      light: "#6CDBAD", // lighter shade of the green
      contrastText: "rgba(256,256,256)",
    },
    secondary: {
      main: "#49C792",
      light: "#CEF3E4",
      contrastText: "rgba(0,0,0,0.87)",
      containedHover: "#6CDBAD",
      outlinedHover: "#EEFBF6",
      disable: "#B9B9B9",
      textColor: "#FFFFFF",
    },
    error: {
      main: "#F44F5A",
    },
    success: {
      main: "#49C792",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EBEBEB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CACACA",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#49C792",
          },
          "&.Mui-active .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EBEBEB",
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CACACA",
          },
        },
      },
    },
  },
};

export default lightTheme;
