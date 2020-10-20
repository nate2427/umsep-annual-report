import { Grid, Hidden, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Element } from "react-scroll";

import { get_content } from "../../../shared/Http";
import VerticalStepper from "../../../shared/MUI_Stepper";
import Story from "./Story";

import { useStyles } from "./styles";

export default function Stories({ stories, index }) {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  const [relatedPosts, setRelatedPosts] = React.useState([]);
  const [morePosts, setMorePosts] = React.useState([]);

  React.useEffect(() => {
    const CMS_ENDPOINT = "student-stories?_sort=id:ASC";
    get_content(CMS_ENDPOINT)
      .then((data) => {
        setContent(data.data);
        index === 0
          ? setRelatedPosts([...data.data.slice(3, 6)])
          : setRelatedPosts([...data.data.slice(0, 3)]);
        index === 0
          ? setMorePosts([...data.data.slice(0, 3)])
          : setMorePosts([...data.data.slice(3, 6)]);
        console.log([...data.data.slice(0, 3)]);
      })
      .then(() => console.log(morePosts));
    // eslint-disable-next-line
  }, []);

  const names = [
    "story-1",
    "story-2",
    "story-3",
    "story-4",
    "story-5",
    "story-6",
  ];

  return (
    <Grid
      className={classes.container}
      justify="center"
      container
      item
      xs={10}
      sm={11}
      lg={10}
    >
      {/* title and description */}
      <Grid container justify="center" className={classes.titleHeaderContainer}>
        <Typography className={classes.title} align="center" variant="h2">
          {stories ? stories[index].title : ""}
        </Typography>
        <Typography
          className={classes.description}
          align="justify"
          variant="body1"
        >
          {stories ? stories[index].description : ""}
        </Typography>
      </Grid>
      {/* stories */}
      <Grid
        container
        item
        className={clsx([classes.storiesContainer, "content"])}
        xs={12}
        sm={7}
        xl={7}
        id="story-scroll-cntr"
      >
        {content[0] &&
          content.slice(index * 3, index * 3 + 3).map((story, index2) => {
            return (
              <div key={index2}>
                <Element name={names[index2]}>
                  <Story
                    scrollName={names[index2] ? names[index2] : ""}
                    title={story.title}
                    description={story.description}
                    image={story.imgUrl}
                  />
                </Element>
              </div>
            );
          })}
      </Grid>
      {/* stepper for screens larger than mobile */}
      <Hidden xsDown>
        <Grid
          container
          item
          className={clsx([classes.stepperContainer])}
          sm={5}
        >
          <VerticalStepper
            more="Stories on this page"
            related="Related Stories"
            posts={content[index] ? [morePosts, relatedPosts] : []}
            page={index}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
}
