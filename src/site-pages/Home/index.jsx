import { Button, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Transition } from "react-transition-group";
import { useHistory } from "react-router-dom";

import { useStyles } from "./styles";
import tempPhoto from "../../assets/Webp.net-resizeimage.png";

export default function Home() {
  const classes = useStyles();
  const [fade, setFade] = React.useState(true);
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
  };

  React.useEffect(() => {
    const fadeInterval = setInterval(() => setFade(!fade), 700);
    return () => {
      // Clean up the subscription
      clearInterval(fadeInterval);
    };
  });

  const router = useHistory();

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.topIntroContainer}
        >
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            xl={2}
            className={classes.logoContainer}
          >
            <img
              src={tempPhoto}
              className={classes.logo}
              alt="University of Michigan logo"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={9}
            xl={10}
            className={classes.namesContainer}
          >
            <Typography
              variant="h3"
              className={clsx([classes.schoolName, classes.text])}
            >
              School of Public Health
            </Typography>
            <Typography
              variant="h2"
              className={clsx([classes.programName, classes.text])}
            >
              Summer Enrichment Program
            </Typography>
            <Typography
              variant="h2"
              className={clsx([classes.universityName, classes.text])}
            >
              University Of Michigan
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Typography
            className={clsx([
              classes.annualReport,
              classes.text,
              classes.reportRange,
            ])}
            variant="h2"
          >
            A Strategic and Program Review of UMSEP
          </Typography>
          <Typography
            className={clsx([
              classes.dateRange,
              classes.text,
              classes.reportRange,
            ])}
            variant="h4"
          >
            2016 - 2019
          </Typography>
          <Grid
            container
            justify="flex-end"
            className={classes.buttonContainer}
          >
            <Transition in={fade} timeout={duration}>
              {(state) => (
                <Button
                  variant="contained"
                  TouchRippleProps={{ classes: classes.rippleVisible }}
                  className={clsx([classes.exploreButton, classes.text, "m-2"])}
                  onClick={() => router.push("/about/program-introduction")}
                >
                  Explore
                  <div
                    className={classes.shadow}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  ></div>
                </Button>
              )}
            </Transition>
          </Grid>
          <Grid
            container
            justify="flex-end"
            className={classes.buttonContainer}
          >
            <Button
              variant="contained"
              TouchRippleProps={{ classes: classes.rippleVisible }}
              className={clsx([ classes.downloadButton, "m-2"])}
            >
              Download PDF
            </Button>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
