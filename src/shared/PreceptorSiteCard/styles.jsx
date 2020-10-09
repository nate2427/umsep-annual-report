import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "2rem 0",
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
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      fontSize: ".9rem",
      height: "3.8rem",
    },
  },
  showFullText: {
    height: "auto",
    overflow: "auto",
    paddingBottom: "1.5rem",
  },
  title: {
    color: "#FFCB3D",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    fontWeight: "600",
    fontSize: "1rem",
    lineHeight: "2rem",
    textAlign: "center",
    paddingBottom: "1rem",
    paddingTop: ".5rem",

    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      fontSize: ".95rem",
    },
  },
  cardContent: {
    backgroundColor: "#00274C",
    height: "17rem",
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
    },
  },
  showFullCardContent: {
    height: "auto",
  },
  buttonContainer: {
    padding: "1rem 0",
    paddingTop: "3rem",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5rem",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      paddingTop: "3rem",
    },
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
  cardOtherContainer: {
    padding: "1rem",
  },
}));
