import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

import { get_content } from "../../shared/Http";
import gsap from "gsap";

import { useStyles } from "./styles";
import { useParams } from "react-router";

import Stories from "./Stories";

export default function StudentStories() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});

  const titleRef = React.useRef(null);

  const { page } = useParams();

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-student-stories";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  React.useEffect(() => {
    gsap.from(titleRef.current, {
      scale: 0,
      duration: 1,
      opacity: 0,
      delay: 0.3,
      ease: "expo.easeInOut",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}
        <Grid container className={clsx([classes.heroContainer])}>
          <div
            className={clsx([
              classes["hero-yellow-square"],
              classes["hero-yellow-one"],
            ])}
          ></div>
          <div
            className={clsx([
              classes["hero-blue-square"],
              classes["hero-blue-one"],
            ])}
          ></div>
          <Grid
            container
            className={clsx([classes["hero-middle-square"]])}
            justify="center"
            alignItems="center"
          >
            <div ref={titleRef} style={{ width: "100%" }}>
              <Typography
                className={classes.heroTitle}
                align="center"
                variant="h1"
              >
                {content.data ? content.data.title : ""}
              </Typography>
            </div>
          </Grid>
          <div
            className={clsx([
              classes["hero-blue-square"],
              classes["hero-blue-two"],
            ])}
          ></div>
          <div
            className={clsx([
              classes["hero-yellow-square"],
              classes["hero-yellow-two"],
            ])}
          ></div>
        </Grid>
        {/* main content */}
        <Grid
          container
          justify="center"
          className={clsx([classes.mainContainer, "element-boundary"])}
        >
          <Stories
            stories={content.data && content.data.student_story_pages}
            index={page === "virtual-bootcamp" ? 0 : 1}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
