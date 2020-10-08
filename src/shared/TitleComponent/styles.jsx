import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "fit-content",
    display: "flex",
  },
  innerContainer: {
    borderLeft: "#FFCB3D solid 1rem",
    color: "#fff",
    height: "fit-content",
    padding: "0.5rem 0 1rem 1rem",
  },
  pageTitle: {
    width: "100%",
    fontSize: "1.5rem",
    fontFamily: "Merriweather, san-serif",
    fontWeight: "bold",
    lineHeight: "2.5rem",
  },
  pageSubTitle: {
    width: "100%",
    fontSize: "1rem",
    fontFamily: "Merriweather, san-serif",
    fontWeight: "bold",
  },
  blueBorder: { borderLeftColor: "#00274c" },
  fontColorBlue: {
    color: "#00274c",
  },
}));
