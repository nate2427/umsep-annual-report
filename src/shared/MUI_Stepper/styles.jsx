import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  morePost: {
    textTransform: "Capitalize",
  },
  stepperLabel: {
    "&:hover": {
      cursor: "pointer",
      color: "#5383ff",
      opacity: 1,

      fontWeight: "500",
    },
  },
  morePostContainer: {
    padding: "7rem 0rem",
    paddingLeft: "5rem",
  },
}));
