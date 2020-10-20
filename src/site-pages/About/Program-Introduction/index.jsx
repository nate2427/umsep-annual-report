import { Button, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { Power3, TimelineLite } from "gsap";

import { useStyles } from "./styles";
import Title from "../../../shared/TitleComponent";
import { get_content } from "../../../shared/Http";

export default function ProgramIntroduction() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  let imgRef = React.useRef(null);
  let container = React.useRef(null);
  let topParagraph = React.useRef(null);
  let bottomParagraph = React.useRef(null);

  const tl = new TimelineLite();
  const router = useHistory();

  // get the content from the CMS
  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-program-introduction";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data)
    });
  }, []);

  // animate the image spinning
  React.useEffect(() => {
    tl.to(container, { css: { visibility: "visible" }, duration: 0 });
    tl.from(imgRef, {
      rotateZ: "-1260",
      ease: Power3.easeInOut,
      duration: 1.4,
      opacity: "0",
      delay: 1
    });
    tl.from([topParagraph, bottomParagraph], {
      opacity: 0,
      delay: 0,
      duration: 0.5,
      ease: Power3.easeIn,
      stagger: 0.4,
    });
    // eslint-disable-next-line
  }, []);


  return (
    <Grid className={classes.container}>
      <Grid
        container
        className={classes.innerContainer}
        ref={(el) => (container = el)}
      >
        <Title
          title={content.data ? content.data.pageTitle : ""}
          subtitle={content.data ? content.data.pageSubtitle : ""}
        />
        <Grid container className={classes.heroTrio}>
          <Grid container justify="center" item xs={12}>
            <Typography
              variant="body1"
              className={classes.spinnerTextTop}
              ref={(el) => (topParagraph = el)}
            >
              {content.data
                ? content.data.program_intro_paragraph.above_line_top_p
                : ""}
            </Typography>
          </Grid>
          <Grid
            container
            className={classes.imgContainer}
            item
            xs={12}
            justify="center"
            alignItems="center"
          >
            <img
              ref={(el) => (imgRef = el)}
              className={classes.img}
              src={content.data
                ? content.data.imgUrl : '/#'}
              alt={"spinner"}
            />
          </Grid>
          <Grid container item xs={12} alignContent="flex-end">
            <Typography
              variant="body1"
              className={classes.spinnerTextBottom}
              ref={(el) => (bottomParagraph = el)}
            >
              {content.data
                ? content.data.program_intro_paragraph.above_line_bottom_p
                : ""}
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item container className={classes.belowContainer}>
            <Typography variant="body1" className={classes.belowParagraph1}>
              {content.data
                ? content.data.program_intro_paragraph.below_line_top_p
                : ""}
            </Typography>
            <Typography variant="body1" className={classes.belowParagraph2}>
              {content.data
                ? content.data.program_intro_paragraph.below_line_bottom_p
                : ""}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            className={classes.buttonTitleContainer}
          >
            <Grid item xs={12}>
              <Typography
                className={classes.exploreTitle}
                align="center"
                variant="h2"
              >
                Learn More
              </Typography>
            </Grid>
            <Grid container item justify="space-between" lg={8}>
              <Grid container className={classes.introButtonContainer}>
                <Button
                  className={classes.introButton}
                  fullWidth
                  variant="contained"
                  onClick={() => router.push("/about/program-overview")}
                >
                  Program Overview
                </Button>
              </Grid>
              <Grid container className={classes.introButtonContainer}>
                <Button
                  className={clsx([classes.introButton, classes.introButton2])}
                  fullWidth
                  variant="contained"
                  onClick={() => router.push("/about/history")}
                >
                  Program History
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
