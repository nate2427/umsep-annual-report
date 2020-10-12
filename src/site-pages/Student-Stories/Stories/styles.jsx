import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  innerContainer: {},
  title: {
    paddingBottom: "2rem",
    fontSize: "3rem",
    fontFamily: "Merriweather, Merriweather sans",
    borderBottom: "solid 0.0625rem #000",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  description: {
    width: "100%",
    fontSize: "1.5rem",
    paddingTop: "3rem",
    paddingBottom: "7rem",
    lineHeight: "4rem",
    fontFamily: "Merriweather sans, sans-serif",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem",
      paddingTop: "3rem",
      lineHeight: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      paddingTop: "3rem",
      lineHeight: "2rem",
    },
  },
  storiesContainer: {
    height: "100vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      height: "300vh",
    },
  },
  storyContainer: {
    padding: "2rem 0",
  },
  storyImg: {
    width: "10.5rem",
    height: "11.05175rem",
    [theme.breakpoints.up("sm")]: {
      width: "26.25rem",
      height: "27.629375rem",
    },
  },
  storyTitle: {
    letterSpacing: "0.08rem",
    fontSize: "1.5rem",
    lineHeight: "3rem",
    color: "#484747",
    fontFamily: "Merriweather, Merriweather sans",
    paddingBottom: "2rem",
    textTransform: "capitalize",
  },
  storyDescription: {
    padding: "2rem 1rem",
    fontSize: "1rem",
    lineHeight: "2.5rem",
    color: "#484747",
    fontFamily: "Merriweather sans, sans-serif",
    textAlign: "justify",
  },
  showMoreButton: {
    color: "#FFFAFA",
    backgroundColor: "#00274C",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#00274C",
    },
  },
  stepperContainer: {},
}));
