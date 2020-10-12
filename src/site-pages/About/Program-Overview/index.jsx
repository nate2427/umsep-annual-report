import { Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

import { useStyles } from "./styles";
import { get_content } from "../../../shared/Http";
import Spinner from "../../../assets/Spinner@2x.png";

export default function ProgramIntroduction() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});

  // get the content from the CMS
  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-program-introduction";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
    });
  }, []);

  console.log(Spinner);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}></Grid>
    </Grid>
  );
}
