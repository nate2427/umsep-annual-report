import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#02274C",
  },
  innerContainer: {
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
      paddingTop: "4rem",
    },
  },
  topIntroContainer: {
    height: "fit-content",
    [theme.breakpoints.up("md")]: {
      //   paddingBottom: "5rem",
    },
  },
  logoContainer: {
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      display: "flex",
    },
  },
  logo: {},
  text: {
    color: "#fff",
    width: "100%",
    fontFamily: "Merriweather Sans, san-serif",
    textTransform: "uppercase",
  },
  reportRange: {
    textAlign: "right",
  },
  schoolName: {
    fontSize: "1.2rem",
  },
  namesContainer: {
    paddingLeft: "2rem",
    borderLeft: "solid white 1px",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "unset",
      paddingLeft: "unset",
      textAlign: "center",
      paddingTop: "2rem",
      paddingBottom: "4rem",
    },
  },
  programName: {
    padding: "1rem 0",
    fontSize: "2rem",
    [theme.breakpoints.between("md", "md")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  universityName: {
    fontFamily: "Merriweather, san-serif",
    fontSize: "1.3rem",
  },
  annualReport: {
    fontSize: "2rem",
    lineHeight: '4rem',
    [theme.breakpoints.up("xl")]: {
      fontSize: "3.5rem",
      lineHeight: '7rem',
      width: '60%',
    },

    [theme.breakpoints.down("lg")]: {
      width: '45%',
    },
    [theme.breakpoints.down("md")]: {
      width: '70%',
    },
    [theme.breakpoints.down("sm")]: {
      width: '45%',
      fontSize: "1.5rem",
      lineHeight: '3rem'
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      fontSize: '1.5rem'
    }
  },
  dateRange: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      padding: "1rem 0",
    },
    fontSize: "1rem",
  },
  shadow: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "none",
    boxShadow: "0px 3px 30px #F7C60DD6",
    borderRadius: ".5rem",
  },
  exploreButton: {
    width: "25%",
    [theme.breakpoints.down("lg")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: "1.3rem",
    },
    fontSize: "1.5rem",
    backgroundColor: "#FFCB05",
    color: "#02274C",
    fontFamily: "Merriweather Sans",
    fontWeight: "600",
    height: "3rem",
    position: "relative",
    "&:focus": {
      backgroundColor: "#FFCB05",
    },
    "&:hover": {
      backgroundColor: "#FFCB05",
    },
  },
  downloadButton: {
    width: "25%",
    fontSize: "1.5rem",
    height: "3rem",
    backgroundColor: '#989C97',
    fontFamily: "Merriweather Sans",
    color: "#fff",
    "&:focus": {
      backgroundColor: "#9A3324",
    },
    "&:hover": {
      backgroundColor: "#9A3324",
    },
    [theme.breakpoints.down("lg")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: "1.3rem",
    },
  }
}));
