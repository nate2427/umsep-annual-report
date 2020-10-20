import { makeStyles } from "@material-ui/core";

import preceptors from "../../assets/preceptor_doctor.png";

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
    width: 'inherit',
    height: '40rem',
    [theme.breakpoints.down("xs")]: {
      height: '20rem',
      width: 'inherit',
    },
  }
  
}));
