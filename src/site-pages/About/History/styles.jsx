import { makeStyles } from "@material-ui/core";
import SVG from "../../../assets/TimelineNode.svg";

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
  },
  tileContainer: {
    padding: "2rem 0",
    minHeight: "22.1875rem",
  },
}));
