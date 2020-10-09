import { Grid, Hidden, Typography } from "@material-ui/core";
import { get_content } from "../../../shared/Http";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import dudeAtTable from "../../../assets/dudeAtTable.png";
import smiling from "../../../assets/smiling.png";

// import clsx from "clsx";
import React from "react";

import { useStyles } from "./styles";
import clsx from "clsx";

export default function Innovations() {
  const classes = useStyles();

  const [content, setContent] = React.useState({});
  const theme = useTheme();
  const screenSizeMobile = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-innovations";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}
        <Grid container justify="center">
          <Grid
            container
            justify="center"
            className={classes.heroImgContainer}
            item
            xs={12}
            md={6}
          >
            <div className={classes.heroImg}></div>
          </Grid>
          <Grid
            className={classes.heroRightContainer}
            container
            justify="center"
            item
            xs={11}
            md={6}
          >
            <Grid container>
              <Grid
                container
                className={classes.titleContainer}
                justify="flex-start"
              >
                <Grid container>
                  <Typography variant="h1" className={classes.titleTop}>
                    UMSEP
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h1" className={classes.titleBottom}>
                    Innovations
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.heroParagraphContainer}>
                <Typography variant="body1" className={classes.heroParagraph}>
                  {content.data ? content.data.heroParagraph : ""}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* health and equity portion */}
        <Grid
          container
          justify="center"
          className={classes.healthEquityContainer}
        >
          <Grid container item xs={11} className={classes.cssGridContainer}>
            <div className={classes[".item1"]}>
              <Grid
                container
                alignItems="center"
                justify="flex-start"
                className={classes.healthEqTitleContainer}
              >
                <Typography variant="h1" className={classes.healthEqTitle}>
                  {content.data ? content.data.healthEqTitle : ""}
                </Typography>
              </Grid>
            </div>
            <div className={classes[".item2"]}></div>
            <div className={classes[".item3"]}>
              <Grid container justify="center">
                <Grid
                  container
                  item
                  xs={11}
                  md={6}
                  className={classes.healthEqP1Container}
                >
                  <Typography variant="body1" className={classes.healthEqP1}>
                    {content.data ? content.data.healthEqP1 : ""}
                  </Typography>
                </Grid>
                <Grid
                  justify="center"
                  container
                  item
                  md={6}
                  xs={11}
                  className={classes.healthEqP1Container}
                >
                  <Typography variant="body1" className={classes.healthEqP2}>
                    {content.data ? content.data.healthEqP2 : ""}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container alignItems="center" item xs={12} lg={5}>
            <Grid
              container
              style={{
                height: !screenSizeMobile ? "75%" : "100%",
                padding: !screenSizeMobile ? "0rem 2rem" : "2rem 2rem",
              }}
            >
              <Typography variant="h3" className={classes.virtualBootTitle}>
                {content.data ? content.data.virtualBootTitle : ""}
              </Typography>
              <Typography variant="body1" className={classes.virtualBootWhtP1}>
                {content.data ? content.data.virtualBootWhtP1 : ""}
              </Typography>
              <Typography variant="body1" className={classes.virtualBootWhtP2}>
                {content.data ? content.data.virtualBootWhtP2 : ""}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} lg={3}>
            <div className={classes.computerBackgroundPic}></div>
          </Grid>
          <Grid
            className={classes.blueBackgroundContainer}
            container
            item
            xs={12}
            lg={4}
            alignItems="center"
          >
            <Grid
              container
              style={{
                height: !screenSizeMobile ? "50%" : "100%",
                padding: !screenSizeMobile ? "0rem 0rem" : "2rem 0rem",
              }}
            >
              <Typography
                align="center"
                variant="h5"
                className={classes.virtualBootBluTitle}
              >
                {content.data ? content.data.virtualBootBluTitle : ""}
              </Typography>
              <Typography variant="body1" className={classes.virtualBootBluP1}>
                {content.data ? content.data.virtualBootBluP1 : ""}
              </Typography>
              <Typography variant="body1" className={classes.virtualBootBluP2}>
                {content.data ? content.data.virtualBootBluP2 : ""}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* last section */}
        <Grid container className={classes.ambassadorProgramContainer}>
          <Grid container>
            <Grid
              item
              container
              xs={12}
              md={5}
              className={classes.ambassadorTitleContainer}
              justify="center"
            >
              <Typography
                variant="h2"
                align="center"
                className={classes.ambassadorProTitle}
              >
                {content.data ? content.data.ambassadorProTitle : ""}
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                className={classes.ambassadorProGldP}
              >
                {content.data ? content.data.ambassadorProGldP : ""}
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={12}
              md={7}
              className={classes.alumniContainer}
              justify="center"
            >
              <Hidden smDown>
                <Grid container>
                  <Grid item md={5} className={classes.imageContainer}>
                    <img src={dudeAtTable} alt={"umich alumni"} />
                  </Grid>
                  <Grid
                    item
                    md={7}
                    className={clsx([
                      classes.imageContainer2,
                      classes.imageContainer,
                    ])}
                  >
                    <img src={smiling} alt={"umich alumni"} />
                  </Grid>
                </Grid>
              </Hidden>

              <Grid container className={classes.alumniTitleContainer}>
                <Typography variant="h2" className={classes.umsepAlumni}>
                  {content.data ? content.data.umsepAlumni : ""}
                </Typography>
                <Typography className={classes.umsepAlumniDesc} variant="body1">
                  {content.data ? content.data.umsepAlumniDesc : ""}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
