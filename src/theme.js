import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3eb8fd",
    },
    secondary: {
      main: "#efefef",
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontSize: "1.1rem",
    },
    body1: {
      fontFamily: "Nunito",
      fontWeight: 500,
    },
  },
  background: {
    position: "fixed",
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        margin: 5,
        borderRadius: "2em",
      },
    },
  },
});
