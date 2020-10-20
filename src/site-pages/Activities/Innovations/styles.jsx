import { makeStyles } from "@material-ui/core";

import umichDoctor from "../../../assets/umich-innovations@2x.png";
import medStudents from "../../../assets/medStudents.png";
import computer from "../../../assets/computer@2x.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor: "#FFFAFA",
  },
  innerContainer: {},
  heroImgContainer: {
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
    },
  },
  heroRightContainer: {
    padding: "3rem 2rem",
    paddingBottom: "20rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0rem",
    },
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "8rem",
    },
  },
  heroImg: {
    background: `url("${umichDoctor}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    height: "100%",
  },
  titleTop: {
    width: "fit-content",
    textAlign: "right",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    color: "#2F65A7",
    fontSize: "3rem",
    textTransform: "uppercase",
    borderBottom: "solid 0.0625rem #2F65A7",
    paddingBottom: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  titleBottom: {
    width: "fit-content",
    textAlign: "right",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    color: "#2F65A7",
    fontSize: "3rem",
    textTransform: "uppercase",
    paddingTop: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  titleContainer: {
    padding: "3rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 0",
    },
  },
  heroParagraphContainer: {
    paddingTop: "3rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0rem",
    },
  },
  heroParagraph: {
    fontSize: "1rem",
    lineHeight: "2rem",
    fontFamily: "Merriweather sans, sans-serif",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
      lineHeight: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: "1.5rem",
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "2rem",
      fontSize: "1rem",
    },
    textAlign: "justify",
  },
  healthEquityContainer: {
    backgroundColor: "#02274C",
    paddingBottom: "10rem",
  },
  cssGridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "27rem auto",
    [theme.breakpoints.down("lg")]: {
      gridTemplateRows: "20rem auto",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateRows: "auto minmax(56.9rem, 1fr) auto",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "auto minmax(51.39rem, 1fr) auto",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateRows: "auto minmax(25.5rem, 1fr) auto",
    },
  },
  ".item1": {
    gridRow: "1 / 2",
    gridColumn: "1/2",
    [theme.breakpoints.down("md")]: {
      gridRow: "1 / 2",
      gridColumn: "1 / 3",
    },
  },
  ".item2": {
    gridRow: "1 / 3",
    gridColumn: "2/3",
    background: `url("${medStudents}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      gridRow: "2 / 3",
      gridColumn: "1 / 3",
    },
  },
  ".item3": {
    gridRow: "2 / 3",
    gridColumn: "1/3",
    zIndex: 5,
    backgroundColor: "#CAA93F",
    [theme.breakpoints.down("md")]: {
      gridRow: "3 / 4",
      gridColumn: "1 / 3",
    },
  },
  healthEqP1Container: {
    padding: "2rem",
  },
  healthEqP1: {
    fontSize: "1rem",
    lineHeight: "2rem",
    textAlign: "justify",
  },
  healthEqP2Container: {},
  healthEqP2: {
    fontSize: "1rem",
    lineHeight: "2rem",
    textAlign: "justify",
  },
  healthEqTitle: {
    color: "#FFFAFA",
    fontFamily: "Merriweather, Merriweather sans",
    fontWeight: "bold",
    fontSize: "3rem",
    lineHeight: "5rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      lineHeight: "3rem",
    },
  },
  healthEqTitleContainer: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 0",
    },
  },
  computerBackgroundPic: {
    background: `url("${computer}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    height: "50.96rem",
    backgroundColor: "#02274C",
    [theme.breakpoints.down("md")]: {
      height: "0",
    },
  },
  blueBackgroundContainer: {
    backgroundColor: "#02274C",
    color: "white",
    padding: "0 2rem",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      padding: "3rem 2rem",
    },
  },
  virtualBootBluTitle: {
    lineHeight: "2rem",
    fontSize: "1.2rem",

    paddingBottom: "1rem",
  },
  virtualBootTitle: {
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "2rem",
      paddingTop: "3rem",
    },
  },
  virtualBootWhtP1: {
    fontFamily: "Montserrat, san-serif",
    fontSize: "1rem",
    lineHeight: "2rem",
    fontWeight: "bold",
    color: "#0000009B",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "2rem",
    },
  },
  virtualBootWhtP2: {
    fontFamily: "Montserrat, san-serif",
    fontSize: "1rem",
    lineHeight: "2rem",
    fontWeight: "bold",
    color: "#02274C",
    textAlign: "center",
    letterSpacing: "0.96px",
    padding: "0 3rem",
  },
  virtualBootBluP1: {
    lineHeight: "2rem",
    fontSize: "1rem",
    fontFamily: "Merriweather sans, sans-serif",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "2rem",
    },
  },
  virtualBootBluP2: {
    lineHeight: "2rem",
    fontSize: "1rem",
    fontFamily: "Merriweather sans, sans-serif",
  },
  ambassadorProgramContainer: {
    paddingBottom: "5rem",
    paddingTop: "10rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  ambassadorTitleContainer: {
    backgroundColor: "#CAA93F",
    color: "#f0f0f0",
    padding: "2rem",
    [theme.breakpoints.up("xl")]: {
      paddingBottom: "7rem",
    },
  },
  ambassadorProTitle: {
    width: "100%",
    fontFamily: "Merriweather, sans-serif",
    paddingBottom: "2rem",
    fontWeight: "bold",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "4rem",
    },
  },
  ambassadorProGldP: {
    width: "100%",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    lineHeight: "2rem",
    paddingBottom: "5rem",
    fontWeight: "bold",
  },
  alumniContainer: {
    paddingLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0rem",
    },
  },
  imageContainer: {
    height: "19.0625rem",
  },
  alumniTitleContainer: {
    paddingTop: "6rem",
  },
  umsepAlumniDesc: {
    fontFamily: "Montserrat, Merriweather sans",
    fontSize: "1rem",
    lineHeight: "2rem",
    textAlign: "justify",
    paddingRight: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
  },
  umsepAlumni: {
    color: "#3166A8",
    fontSize: "2rem",
    textTransform: "uppercase",
    fontFamily: "Merriweather",
    fontWeight: "bold",
    paddingBottom: "2rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));
