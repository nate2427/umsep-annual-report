import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import clsx from "clsx";

import React from "react";

import gsap from "gsap";

import { get_content } from "../../shared/Http";

import { useInView } from "react-intersection-observer";

import { useStyles } from "./styles";

export default function StrategicPlan() {
  const classes = useStyles();
  const [content, setContent] = React.useState(null);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const descriptionRef2 = React.useRef(null);
  const theme = useTheme();
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const query = useMediaQuery(theme.breakpoints.down("xs"));
  const [ref2, inView2] = useInView({ threshold: .3 });

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-strategic-plan";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data.data);
      console.log(data);
    });
  }, []);

  const slideIn = () => {
    !hasAnimated &&
      query &&
      gsap
        .to(descriptionRef2.current, {
          x: 0,
          duration: 0.7,
          delay: 1,
          ease: "expo.easeInOut",
        })
        .then(() => setHasAnimated(!hasAnimated));


    !hasAnimated && gsap.to(titleRef.current, {
      scale: 1,
      duration: .7,
      ease: "expo.easeInOut",
    }).then(() => {gsap.to(descriptionRef.current, {
      x: 0,
      duration: .7,
      delay:  0.1,
      ease: "expo.easeInOut",
    })}).then(() => setHasAnimated(!hasAnimated));

  };

  const slideOut = () => {
    console.log("outta view");
    !hasAnimated &&
      query &&
      gsap.to(descriptionRef2.current, {
        x: 600,
        duration: 0.7,
        delay: 0,
        ease: "expo.easeInOut",
      });
    !hasAnimated && gsap.to(titleRef.current, {
      scale: 0,
      duration: 0.3,
      delay: 0,
      ease: "expo.easeInOut",
    });
    !hasAnimated && gsap.to(descriptionRef.current, {
      x: 1000,
      duration: .3,
      ease: "expo.easeInOut",
    });
  };

  // inView && query ? slideIn() : slideOut();
  inView2 ? slideIn() : slideOut();

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}

        <div ref={ref2}>
        <Grid container className={classes.heroContainer}>
          <Grid container className={clsx([classes["blue-background"]])}></Grid>
          <div ref={titleRef} className={clsx([classes["white-background"]])}>
            <Grid container>
              <Grid container className={classes.titleContainer}>
                <Typography
                  className={classes.title}
                  variant="h1"
                  align="center"
                >
                  {content && content.title}
                </Typography>
                <Typography
                  className={classes.dateRange}
                  variant="h1"
                  align="center"
                >
                  {content && content.dateRange}
                </Typography>
              </Grid>
            </Grid>
          </div>
          {/* <Hidden xsDown> */}
          {!query && (
            <div
              ref={descriptionRef}
              className={clsx([classes["white-background-2"]])}
            >
              

              
              <Grid container justify="center">
                <Grid
                  item
                  container
                  alignItems="center"
                  sm={8}
                  justify="center"
                >
                  <Paper
                    className={classes.descriptionContainer}
                    elevation={10}
                  >
                    <Typography
                      className={classes.description}
                      variant="body1"
                      align="justify"
                    >
                      {content && content.description}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              </div>
          )}

          {/* </Hidden> */}
        </Grid>
        {query && (
          <Grid
            container
            justify="center"
            className={clsx([classes["white-background-2"]])}
          >
            <div
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                item
                container
                className={classes.paperContainer}
                alignItems="center"
                xs={10}
                justify="center"
              >
                <div ref={descriptionRef2}>
                  <Paper
                    className={classes.descriptionContainer}
                    elevation={10}
                  >
                    <Typography
                      className={classes.description}
                      variant="body1"
                      align="justify"
                    >
                      {content && content.description}
                    </Typography>
                  </Paper>
                </div>
              </Grid>
            </div>
          </Grid>
        )}
        </div>
        
      </Grid>
    </Grid>
  );
}
