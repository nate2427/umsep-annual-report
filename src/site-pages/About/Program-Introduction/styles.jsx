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
  spinnerTextTop: {
    color: "#fff",
    padding: "0rem 0rem 0 2rem",
    textAlign: "justify",
    textJustify: "inter-word",
    letterSpacing: "0.8px",
    fontSize: "1rem",
    lineHeight: "2rem",
    [theme.breakpoints.down("md")]: {
      padding: "0rem 2rem 0 2rem",
    },
  },
  spinnerTextBottom: {
    color: "#fff",
    padding: "20rem 2rem 0 2rem",
    textAlign: "justify",
    textJustify: "inter-word",
    letterSpacing: "0.8px",
    fontSize: "1rem",
    lineHeight: "2rem",
    [theme.breakpoints.down("md")]: {
      padding: "0rem 2rem 0 2rem",
    },
  },
  img: {
    [theme.breakpoints.up("lg")]: {
      height: "20.21875rem",
      width: "24.4403125rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "24.0625rem",
      width: "29.328375rem",
    },
    [theme.breakpoints.down("md")]: {
      height: "20.21875rem",
      width: "24.4403125rem",
    },
  },
  heroTrio: {
    minHeight: "80vh",
    padding: "2rem 0",
  },
  divider: {
    width: "100%",
    padding: ".1rem",
    backgroundColor: "#FFCB3D",
  },
  belowContainer: {
    padding: "0 2rem",
  },
  belowParagraph1: {
    color: "#fff",
    paddingTop: "7rem",
    paddingBottom: "3rem",
    fontSize: "1.25rem",
    letterSpacing: "0.8px",
    lineHeight: "2.5rem",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  belowParagraph2: {
    color: "#fff",
    paddingBottom: "3rem",
    fontSize: "1.25rem",
    letterSpacing: "0.8px",
    lineHeight: "2.5rem",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  exploreTitle: {
    width: "100%",
    color: "#FFF6DB",
    fontSize: "3rem",
    fontFamily: "Merriweather, Merriweather sans",
  },
  introButtonContainer: {
    width: "50%",
    paddingTop: "6rem",
    padding: "0rem 2rem",
    paddingBottom: "5rem",
    [theme.breakpoints.up("xl")]: {
      paddingBottom: "7rem",
    },
  },
  imgContainer: {
    padding: "2rem 0",
  },
  introButton: {
    backgroundColor: "#FFCB3D",
    fontSize: "1.5rem",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#00274C",
    "&:hover": {
      backgroundColor: "#FFCB3D",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  introButton2: {
    backgroundColor: "#2F65A7",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2F65A7",
    },
  },
}));