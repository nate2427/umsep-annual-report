import { makeStyles } from "@material-ui/core";

import background from "../../../assets/background.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    minHeight: "90vh",
  },
  innerContainer: {
    height: "fit-content",
  },
  heroContainer: {
    background: `url("${background}")`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    height: "90vh !important",
    overflow: "hidden",
    paddingTop: "2rem",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
  },
  paragraphsContainer: {
    padding: "5rem",
    backgroundColor: "#EAEAEA",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  smallText: {
    fontSize: "1.2rem",
    lineHeight: "2.5rem",
    textAlign: "justify",
    padding: "2rem 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
  largeText: {
    fontSize: "1.875rem",
    lineHeight: "4rem",
    textAlign: "center",
    color: "#00274C",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  statOverview: {
    padding: "7rem 0",
    backgroundColor: "#FFFAFA",
  },
  tileOuterContainer: {
    paddingTop: "4rem",
  },
  tileContainer: {
    backgroundColor: "#00274C",
    borderRadius: "1.875rem",
    padding: "1rem",
  },
  tile: {
    width: "11rem",
    height: "11rem",
    backgroundColor: "#EAEAEA",
    borderRadius: "1.875rem",
    [theme.breakpoints.down("xs")]: {
      width: "9rem",
      height: "9rem",
      fontSize: "1rem",
    },
    padding: "1rem",
    textAlign: "center",
    fontFamily: "Merriweather",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#00274C",
  },
  tileInnerContainer: {
    padding: "1rem",
  },
  tileBack: {
    fontSize: "1.5rem",
  },
}));
