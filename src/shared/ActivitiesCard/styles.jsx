import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "0px 0.1875rem 1.125rem #0000007E",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: "17.25rem",
    width: "35rem",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      height: "auto",
      padding: "1rem 0",
    },
    backgroundColor: "#2F65A7",
    // justifyContent: "center",
  },
  content: {
    padding: "1rem",
  },
  cover: {
    width: 170,
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      height: "20rem",
    },
  },
  controls: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  description: {
    color: "#C6C6C6",
    fontFamily: "Merriweather sans, sans-serif",
    fontWeight: "medium",
    fontSize: "1rem",
    textAlign: "justify",
  },
  title: {
    color: "#F7F4F4",
    fontFamily: "Merriweather sans, sans-serif",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
}));
