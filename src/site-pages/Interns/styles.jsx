import { makeStyles } from "@material-ui/core";

import preceptors from "../../assets/General-2019-SEP-GroupCasual.jpg";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#EAEAEA",
  },
  innerContainer: {},
  heroOuterContainer: {
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  heroContainer: {
    paddingTop: "2rem",
    background: `url("${preceptors}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "130vh",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "65vh",
    },
    [theme.breakpoints.down("xs")]: {
      // height: "100vh",
      height: "43vh",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      height: "120vh",
    },
  },
  yearCard: {
    width: "100%",
    backgroundColor: "#00274C",
    padding: "1rem",
  },
  year: {
    width: "100%",
  },
  mainContainer: {
    padding: "2rem 0",
  },
  descriptionContainer: {
    paddingBottom: "4rem",

    [theme.breakpoints.up("xl")]: {
      paddingBottom: "6rem",
    },
  },
  description: {
    fontSize: "1.2rem",
    textAlign: "justify",
    lineHeight: "2.4rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
      lineHeight: "3rem",
    },
  },
  paperContainer: {
    padding: "0 1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0",
    },
  },
  intern: {
    color: "#fff",
    opacity: ".6",
    fontFamily: "Merriweather sans, sans-serif",
    width: "100%",
    padding: ".5rem 0",
    paddingLeft: "1.5rem",
  },
  industryTitle: {
    color: "#fff",
    fontFamily: "Merriweather, Merriweather sans",
    fontWeight: "bold",
    opacity: ".85",
  },
  industry: {
    color: "#fff",
    opacity: ".6",
    fontFamily: "Merriweather sans, sans-serif",
    width: "100%",
    padding: ".5rem 0",
    paddingLeft: "1.5rem",
  },
  industryContainer: {
    paddingBottom: "1rem",
  },
   yearImg: {
    width: 'inherit',
    height: '45rem',
    [theme.breakpoints.down("xs")]: {
      height: '20rem',
      width: 'inherit',
    },
  },
  imageContainer: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: '3rem'
    },
  }
}));
