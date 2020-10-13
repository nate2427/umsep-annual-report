import { makeStyles } from "@material-ui/core";

import preceptors from "../../assets/preceptor_doctor.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#EAEAEA",
  },
  innerContainer: {},
  heroOuterContainer: {
    height: "100vh",
    overflow: "hidden",
  },
  heroContainer: {
    background: `url("${preceptors}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "130vh",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "65vh",
    },
    [theme.breakpoints.down("xs")]: {
      // height: "100vh",
      backgroundSize: "140%",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      height: "120vh",
    },
  },
}));
