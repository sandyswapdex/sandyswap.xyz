import { createTheme } from "@material-ui/core/styles";
import coreTheme from "./coreTheme";

// Create a theme instance.
const theme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    background: {
      default: "#111",
      paper: "rgb(41, 41, 41)",
    },
    primary: {
      main: "#9b9b9b",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "#7E99B0",
    },
    type: "dark",
  },
  overrides: {
    ...coreTheme.overrides,
    MuiSnackbarContent: {
      root: {
        color: "#fff",
        backgroundColor: "#2A2E3C",
        padding: "0px",
        minWidth: "auto",
        "@media (min-width: 960px)": {
          minWidth: "400px",
        },
      },
      message: {
        padding: "0px",
      },
      action: {
        marginRight: "0px",
      },
    },
    MuiTooltip: {
      tooltip: {
        background: "#FFF !important",
        border: "1px solid #fff",
        borderRadius: "8px",
        color: "#000",
        fontSize: "13px",
      },
    },
  },
});

export default theme;
