import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    display: "flex",
    backgroundColor: "#EAEAEA",
    
  },
  innerContainer: {
    paddingTop: '2rem'
  },
  heroContainer2: {
    [theme.breakpoints.only('xs')]: {
      height: 'fit-content'
    },
    
  },
  "blue-background": {
    
    backgroundColor: "#02274C",
    
  },
  title: {
    width: "100%",
    fontSize: "2.5rem",
    lineHeight: "6rem",
    textTransform: "capitalize",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    letterSpacing: "0.2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      lineHeight: "4rem",
      paddingBottom: "2rem",
    },
  },
  titleContainer: {
    height: "fit-content",
    padding: "5rem 1rem",
  },
  descriptionContainer: {
    padding: "2rem",
    width: '100%',
  },
  description: {
    color: "#2F65A7",
    fontSize: "2rem",
    paddingBottom: '1rem'

  },
  descriptionMessage: {
    color: "#2F65A7",
    fontSize: "2rem",
    padding: '1rem 0'
  },
  paperContainer: {
    paddingTop: "7rem",
    paddingBottom: "10rem",
  },
  mainContainer: {
    height: '40vh',
    [theme.breakpoints.only('xs')]: {
      height: 'unset'
    },
  },
  input: {  padding: '8.5px 14px !important'}
}));
