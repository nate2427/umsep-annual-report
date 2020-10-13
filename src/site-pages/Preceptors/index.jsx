import { Grid } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";

import { get_content } from "../../shared/Http";

import { useStyles } from "./styles";

export default function History() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-history";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        <Grid container className={classes.heroOuterContainer}>
          <Grid container className={classes.heroContainer}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
