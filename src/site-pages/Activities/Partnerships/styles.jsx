import { makeStyles } from "@material-ui/core";
import siteVistPic from "../../../assets/SiteVisits-2016-HenryFord@2x.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    display: "flex",
    backgroundColor: "#EAEAEA",
  },
  innerContainer: {
    paddingTop: "2rem",
  },
  activitiesTitle: {
    // width: "100%",
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
    minHeight: "70vh",
  },
  heroImg: {
    width: "100%",
    height: "100%",
    boxShadow: "0rem 0rem 1rem black",
    borderRadius: ".4rem",
    
  },
  heroImgContainer: {
    height: '26.125rem',
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
      fontSize: "1.1rem",
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
  heroParagraph2Container: {
    paddingBottom: "8rem",
  },
  heroParagraph2: {
    fontSize: "1.5rem",
    lineHeight: "3rem",
    textAlign: "justify",
    padding: "3rem 4rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
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

  precetorSitesContainer: {
    backgroundColor: "#F5F5F5",
    paddingTop: "3rem",
  },
  description: {
    height: "4.1rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Merriweather sans, sans-serif",
    textAlign: "justify",
    fontSize: "1rem",
    fontWeight: "400",
    color: "#F5F5F5",
  },
  showFullText: {
    height: "auto",
    overflow: "auto",
    paddingBottom: "1.5rem",
  },
  title: {
    color: "#FFCB3D",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    fontWeight: "bold",
    fontSize: "1.25",
    lineHeight: "2rem",
    textAlign: "center",
    paddingBottom: "1rem",
    paddingTop: ".5rem",
  },
  cardContent: {
    backgroundColor: "#00274C",
  },
  buttonContainer: {
    padding: "1rem 0",
  },
  buttton: {
    backgroundColor: "#FFCB3D",
    color: "#00274C",
    fontFamily: "Merriweather sans, sans-serif",
    textTransform: "uppercase",
  },

  buttonContained: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  middleImgContainer: {
    padding: "3rem 0rem",
    paddingRight: "1rem",
    paddingBottom: "10rem",
  },
  backgroundImg: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    height: "35rem",
    [theme.breakpoints.down("md")]: {
      height: "25rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
    },
  },
  preceptorImgDescContainer: {
    padding: "0 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      paddingBottom: "5rem",
      paddingTop: "3rem",
    },
  },
  preceptorImgDesc: {
    fontFamily: "Merriweather sans, sans-serif",
    fontSize: "1rem",
    textAlign: "justify",
    textJustify: "inter-word",
    lineHeight: "2rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.25rem",
      lineHeight: "3rem",
    },
  },
  siteVisitsContainer: {
    paddingTop: "2rem",
    backgroundColor: "#FFFAFA",
  },
  customCardContainer: {
    paddingTop: "5rem",
    paddingBottom: "10rem",
  },
  customCard: {
    width: "50.8125rem",
    height: "20rem",
    backgroundColor: "#FECB2E",
    boxShadow: "0rem 0.1875rem 1.25rem #00000060",
    padding: "0 2rem",
    [theme.breakpoints.down("lg")]: {
      minHeight: "20rem",
      height: "auto",
      padding: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "20rem",
      height: "auto",
    },
  },
  firstCard: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "5rem",
    },
  },
  customCardText: {
    wordSpacing: '.1px',
    fontSize: "1rem",
    textAlign: "justify",
    lineHeight: "2rem",
    fontFamily: "Merriweather sans",
    [theme.breakpoints.down("md")]: {
      lineHeight: "2rem",
      fontSize: '.9rem'
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "2rem",
      fontSize: '.8rem'
    },
  },
  bottomImg: {
    width: "100%",
    minHeight: "28rem",
    [theme.breakpoints.down("xs")]: {
      minHeight: "15rem",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "35rem",
    },
    background: `url("${siteVistPic}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  bottomImgOuterContainer: {
    paddingTop: "10rem",
  },
  lastParagraphContainer: {
    backgroundColor: "#02274C",

    padding: "2rem",
    boxShadow: "0rem 0.1875rem 1.25rem #00000061",
  },
  lastParagraphOuterContainer: {
    paddingTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0rem",
    },
  },
  lastParagraph: {
    color: "#EAEAEA",
    fontFamily: "Merriweather sans, sans-serif",
    lineHeight: "2rem",
    fontSize: "1rem",
  },
}));
