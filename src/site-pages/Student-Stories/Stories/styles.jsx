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
    lineHeight: "4rem",
    fontFamily: "Merriweather sans, sans-serif",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
      paddingTop: "3rem",
      lineHeight: "2rem",
    },
  },
  storiesContainer: {
    padding: "5rem 0",
  },
  storyContainer: {
    padding: "2rem 0",
  },
  storyImg: {
    width: "100%",
    height: "auto",
  },
  storyTitle: {
    letterSpacing: "0.08rem",
    fontSize: "1.5rem",
    color: "#484747",
    fontFamily: "Merriweather, Merriweather sans",
  },
}));
