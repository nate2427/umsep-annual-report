import { makeStyles } from "@material-ui/core";

import SVG from "../../../assets/Path4.svg";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    display: "flex",
    backgroundColor: "#F5F5F5",
  },
  innerContainer: {
    paddingTop: "2rem",
    background: `url("${SVG}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
  },
  activitiesTitle: {
    fontSize: "3rem",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: "1rem",
    borderBottom: "solid 1.0625rem #CFC096",
  },
  activitiesTitleContainer: {
    paddingTop: "7rem",
  },
  activitiesContainer: {
    paddingTop: "3rem",
    paddingBottom: "5rem",
  },
  cardContainer: {
    padding: "2rem 0",
  },
  heroImg: {
    width: "100%",
    height: "100%",
    boxShadow: "0rem 0rem 1rem black",
    borderRadius: ".4rem",
    [theme.breakpoints.down("md")]: {
      height: "38rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "23rem",
    },
  },
  heroImgContainer: {
    height: '30rem',
    [theme.breakpoints.up("xl")]: {
      height: "38rem",
    },
     [theme.breakpoints.down("md")]: {
      height: "38rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "23rem",
    },
  },
  mainContentContainer: {
    paddingTop: "5rem",
  },
  heroParagraph1: {
    fontSize: "1.5rem",
    lineHeight: "3rem",
    textAlign: "justify",
    padding: "0 4rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem",
      lineHeight: "2.4rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1rem 5rem",
      paddingTop: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: "2rem",
      padding: "1rem 2rem",
      paddingTop: "3rem",
    },
  },
  heroParagraph2: {
    fontSize: "1.5rem",
    lineHeight: "3rem",
    textAlign: "justify",
    padding: "3rem 4rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem",
      lineHeight: "2.4rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: "2rem",
      padding: "1rem 2rem",
    },
  },
}));
