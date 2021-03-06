import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    // height: "94vh",
    display: "flex",
    backgroundColor: "#FFCB3D",
    overflowY: "hidden",
    [`${theme.breakpoints.down("md")} and (orientation: landscape)`]: {
      overflowY: "unset",
      height: "auto",
    },
    "&:after": {
      content: '" "',
      width: "58.33333333%",
      position: "absolute",
      top: "0",
      right: "0",
      height: "100%",
      backgroundColor: "#00274C",
      [theme.breakpoints.down("sm")]: {
        width: "50.333333%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "0",
      },
    },
  },
  mainContainer: {
    [theme.breakpoints.up("lg")]: {
      height: "82vh",
      overflowY: "hidden",
      zIndex: "3",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "75vh",
      overflowY: "hidden",
      zIndex: "7",
    },
    [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      height: "100vh",
    }
  },
  innerContainer: {
    paddingTop: "2rem",
  },
  leaderImgContainer: {
    paddingTop: "5rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
  },
  leaderImgInnerContainer: {
    width: "14rem",
    height: "14rem",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  leaderImg: {
    width: "14rem",
    height: "14rem",
    borderRadius: "50%",
  },
  leaderInfoTextContainer: {
    paddingBottom: "10rem",
  },
  leaderName: {
    width: "100%",
    fontFamily: "Merriweather, Merriweather sans, san-serif",
    fontWeight: "bold",
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
  },
  leaderCerts: {
    width: "100%",
    fontSize: "1rem",
    fontFamily: "Merriweather, Merriweather sans, san-serif",
    fontWeight: "bold",
  },
  innerCardContainer: {
    // paddingBottom: "9rem",
    // [theme.breakpoints.down("lg")]: {
    //   paddingBottom: "5rem",
    // },
    // [theme.breakpoints.between("lg", "lg")]: {
    //   height: "30rem",
    // },
    // [theme.breakpoints.between("md", "md")]: {
    //   height: "25rem",
    // },
  },
  // Card styling
  cardContainer: {
    paddingTop: "5rem",
    paddingBottom: "2rem",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
      height: "70vh",
      zIndex: "7",
      
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0",
      height: "75vh",
      zIndex: "7",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      height: "auto",
      paddingTop: "1rem",
      paddingBottom: "0rem",
    },
  },
  card: {
    width: "100%",
    height: '100%'
  },
  cardImgTop: {
    width: '20rem',
    height: '20rem',
    [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      width: '10rem',
      height: '10rem',
    }
  },
  motionCard: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  jobTitleContainer: {
    height: "100%",
    backgroundColor: "#00274C",
    zIndex: "2",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      paddingTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      // height: "fit-content",
      paddingTop: "2rem",
      minHeight: "70vh",
    },
    [theme.breakpoints.between("sm", "sm")]: {
      paddingTop: "2rem",
    },
  },
  nextButtonContainer: {
    paddingRight: "1rem",
    [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      paddingBottom: '2rem'
    }

  },
  jobTitle: {
    color: "#f0f0f0",
    fontSize: "3rem",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    width: "100%",
    paddingBottom: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5rem",
      fontSize: "2rem",
    },
  },
  jobTitleBody2: {
    paddingBottom: "10rem",
    paddingTop: "2rem",
  },
  jobTitleBody: {
    fontSize: "1rem",
    lineHeight: "2.5rem",
    color: "#f0f0f0",
    fontFamily: "Merriweather sans, sans-serif",
    textAlign: "justify",
    textJustify: "inter-word",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.2rem",
    },
  },
  name: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    fontWeight: "bold",
    width: '100%'

  },
  certs: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: "Merriweather, Merriweather sans, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    width: '100%'
  },
  insideCardContainer: {
    // height: "50%",
    // [theme.breakpoints.down("md")]: {
    //   height: "60%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: "100%",
    // },
  },
}));
