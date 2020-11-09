import { Button, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Title from "../../../shared/TitleComponent";
import { get_content } from "../../../shared/Http";
import { Card, CardContent } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { useStyles } from "./styles";

export default function Leadership() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  const [curIndex, serCurIndex] = React.useState(0);

  const cardVariants = {
    before: {
      x: -300,
      opacity: 0,
      position: "absolute",
    },
    onScreen: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: {
        delay: 0.3,
      },
    },
    after: {
      x: 300,
      opacity: 0,
      position: "absolute",
    },
  };

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-leadership";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  const nextLeader = () => {
    serCurIndex((curIndex + 1) % content.data.leaders.length);
  };

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        <Title
          title={content.data ? content.data.pageTitle : ""}
          subtitle={content.data ? content.data.pageSubtitle : ""}
          sidebarColor={"blueBorder"}
          fontColor={"fontColorBlue"}
        />
        <Grid container className={classes.mainContainer}>
          <Grid
            container
            justify="center"
            item
            md={5}
            className={classes.cardContainer}
          >
            <Grid
              container
              justify="center"
              className={classes.innerCardContainer}
            >
              <Grid container justify="center" item xs={8} sm={4} md={8} lg={7} xl={5} >
                <Grid
                  container
                  item
                  xs={12}
                  className={classes.insideCardContainer}
                >
                  <AnimatePresence>
                    <motion.div
                      key={
                        content.data
                          ? content.data.leaders[curIndex].name
                          : "/#"
                      }
                      variants={cardVariants}
                      initial={"before"}
                      animate={"onScreen"}
                      exit={"after"}
                      className={classes.motionCard}
                      transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                    >
                      <Card className={clsx(["mb-4", classes.card])}>
                        <img
                          alt="..."
                          className={clsx(["card-img-top", classes.cardImgTop])}
                          src={
                            content.data
                              ? content.data.leaders[curIndex].imgUrl
                              : "/#"
                          }
                        />
                        <CardContent className="p-3">
                          <h5
                            style={{paddingTop: '1.5rem'}}
                            className={clsx([
                              "card-title font-weight-bold font-size-lg",
                              classes.name,
                            ])}
                          >
                            {content.data
                              ? content.data.leaders[curIndex].name
                              : ""}
                          </h5>
                          <p className={clsx(["card-text", classes.certs])}>
                            {content.data
                              ? content.data.leaders[curIndex].certifications
                              : ""}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className={classes.nextButtonContainer}
              container
              justify="flex-end"
              alignItems="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={nextLeader}
              >
                <ArrowRightAltIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid
            className={classes.jobTitleContainer}
            container
            item
            md={7}
            xl={7}
            xs={12}
          >
            <motion.div
              key={content.data ? content.data.leaders[curIndex].name : ""}
              variants={cardVariants}
              initial={"before"}
              animate={"onScreen"}
              exit={"after"}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
            >
              <Typography
                variant="h2"
                align="center"
                className={classes.jobTitle}
              >
                {content.data ? content.data.leaders[curIndex].jobTitle : ""}
              </Typography>
              <Grid container justify="center">
                <Grid item xs={10}>
                  <Typography variant="body1" className={classes.jobTitleBody}>
                    {content.data
                      ? content.data.leaders[curIndex].description_pt1
                      : ""}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={clsx([
                      classes.jobTitleBody2,
                      classes.jobTitleBody,
                    ])}
                  >
                    {content.data
                      ? content.data.leaders[curIndex].description_pt2
                      : ""}
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
