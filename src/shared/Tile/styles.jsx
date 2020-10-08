import { makeStyles } from "@material-ui/core";
import SVG from "../../assets/TimelineNode.svg";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#EAEAEA",
  },
  innerContainer: {
    paddingTop: "2rem",
  },
  timelineContainer: {
    padding: "5rem 0",
    paddingLeft: "2rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0rem",
    },
  },
  svgBackground: {
    background: `url("${SVG}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "12.5rem",
    width: "14.5rem",
    "&:hover": {
      cursor: "pointer",
    },
    padding: "0 2rem",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  flippedBackground: {
    width: "25rem",
    height: "20rem",
    backgroundColor: "#FFCB3D",
    boxShadow: "0 0.1875rem 1.625rem #00000083",
    borderRadius: "3.3125rem",
    padding: "0 2rem",
    "&:hover": {
      cursor: "pointer",
    },
    zIndex: "2",
    [theme.breakpoints.down("lg")]: {
      width: "18rem",
      height: "20rem",
      lineHeight: "1.1rem",
    },
    [theme.breakpoints.up("xl")]: {
      lineHeight: "1.5rem",
    },

    textAlign: "justify",
    textJustify: "inter-word",
    fontFamily: "Merriweather sans",
  },
  tileContainer: {
    padding: "2rem 0",
    minHeight: "22.1875rem",
  },
}));
