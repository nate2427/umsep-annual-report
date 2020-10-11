import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#FFFAFA",
  },
  innerContainer: {
    height: "fit-content",
  },
  heroContainer: {
    display: "grid",
    gridTemplateColumns: "15vh auto 15vh",
    gridTemplateRows: "15vh 70vh 15vh",
    [theme.breakpoints.down("md")]: {
      gridTemplateRows: "15vh 61vh 15vh",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "15vh 64vh 15vh",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateRows: "15vh 60vh 15vh",
    },
  },
  "hero-blue-square": {
    backgroundColor: "#02274C",
  },
  "hero-yellow-square": {
    backgroundColor: "#FECB2E",
  },
  "hero-middle-square": {
    gridRow: "2/3",
    gridColumn: "1/4",
  },
  "hero-yellow-one": {
    gridRow: "1/2",
    gridColumn: "1/2",
  },
  "hero-yellow-two": {
    gridRow: "3/4",
    gridColumn: "3/4",
  },
  "hero-blue-one": {
    gridRow: "1/2",
    gridColumn: "3/4",
  },
  "hero-blue-two": {
    gridRow: "3/4",
    gridColumn: "1/2",
  },
  heroTitle: {
    fontFamily: "Merriweather, Merriweather sans",
    fontWeight: "bold",
    fontSize: "4rem",
    color: "#2F65A7",
    letterSpacing: "0.15rem",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  mainContainer: {
    padding: "10rem 0",
  },
}));
