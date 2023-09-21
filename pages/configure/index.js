import { SvgIcon } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import classes from "./configure.module.css";

function Configure({ theme }) {
  return <div className={classes.configureContainer}></div>;
}

export default withTheme(Configure);
