import { Grid, Typography } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
// import { useHistory } from "react-router-dom";

import { useStyles } from "./styles";

export default function TitleComponent({ title, subtitle }) {
  const classes = useStyles();

  // const router = useHistory();

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        <Typography className={classes.pageTitle} variant="h3">
          {title}
        </Typography>
        <Typography className={classes.pageSubTitle} variant="h4">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
}
