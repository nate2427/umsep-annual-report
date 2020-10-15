import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  hamburgerIcon: {
    width: "1.5em",
    height: "1.5em",
    color: "#655A52",
  },
  drawer: {
    [theme.breakpoints.down("sm")]: {
      width: "16.75rem !important",
    },
  },
}));
