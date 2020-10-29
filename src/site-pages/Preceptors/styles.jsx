import { makeStyles } from "@material-ui/core";

import preceptors from "../../assets/preceptor_doctor.jpg";

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
    backgroundSize: "contain",
    height: "130vh",
    maxWidth: "100%",
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
      backgroundSize: "cover",
    },
  },
  yearCard: {
    width: "100%",
    backgroundColor: "#00274C",
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
  yearImg: {
    height: '35rem',
    width: '35rem',
    [theme.breakpoints.down("xs")]: {
      height: '20rem',
      width: 'inherit',
    },
  }
  
}));
