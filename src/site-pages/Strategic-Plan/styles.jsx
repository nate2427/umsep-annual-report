import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    display: "flex",
    backgroundColor: "#EAEAEA",
  },
  innerContainer: {},
  heroContainer: {
    display: "grid",
    gridTemplateColumns: "10vw 10vw 10vw 10vw auto",
    gridTemplateRows: "90vh",
    height: "100%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "10vw 10vw 10vw 10vw 30vw 20vw",
      height: "auto",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      gridTemplateRows: "120vh",
      padding: "5rem 0",
    },
  },
  "blue-background": {
    gridColumn: "1/3",
    backgroundColor: "#02274C",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1/4",
    },
    [theme.breakpoints.down("xs")]: {
      gridColumn: "1/5",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      position: "absolute",
      height: "160vh",
    },
  },
  "white-background": {
    gridColumn: "2/4",
    backgroundColor: "#FFFAFA",
    zIndex: 200,
    position: "absolute",
    top: "10vh",
    height: "70vh",
    boxShadow: "0 0.1875rem 1.25rem #000000A8",
    fontWeight: "bold",
    color: "#2F65A7",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "2/5",
    },
    [theme.breakpoints.down("xs")]: {
      gridColumn: "2/6",
      height: "50vh",
      top: "20vh",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      height: "100vh",
      top: "30vh",
    },
  },
  title: {
    width: "100%",
    fontSize: "2.5rem",
    lineHeight: "6rem",
    textTransform: "uppercase",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    letterSpacing: "0.2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      lineHeight: "4rem",
      paddingBottom: "2rem",
    },
  },
  dateRange: {
    width: "100%",
    fontSize: "2.5rem",
    lineHeight: "6rem",
    textTransform: "uppercase",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    letterSpacing: "0.2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      lineHeight: "4rem",
    },
  },
  titleContainer: {
    height: "fit-content",
    padding: "5rem 1rem",
  },
  "white-background-2": {
    gridColumn: "4/6",

    [theme.breakpoints.down("sm")]: {
      gridColumn: "5/6",
    },
    [theme.breakpoints.down("xs")]: {
      gridColumn: "unset",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      gridColumn: "5/6",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  descriptionContainer: {
    padding: "2rem",
  },
  description: {
    color: "#2F65A7",
    fontSize: "1.1rem",

    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      fontSize: ".9rem",
    },
    fontFamily: "Merriweather sans, sans-serif",
    [theme.breakpoints.up("lg")]: {
      lineHeight: "2rem",
    },
  },
  paperContainer: {
    paddingTop: "7rem",
    paddingBottom: "10rem",
  },
}));
