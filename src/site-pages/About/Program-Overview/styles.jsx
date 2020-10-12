import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor: "#02274C",
    paddingTop: "2rem",
  },
  innerContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1rem",
    },
    visibility: "hidden",
  },
}));
