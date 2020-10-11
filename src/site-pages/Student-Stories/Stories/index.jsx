import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";

import { get_content } from "../../../shared/Http";
import VerticalStepper from "../../../shared/MUI_Stepper";
import dudeAtTable from "../../../assets/dudeAtTable.png";

import { useStyles } from "./styles";

export default function Stories({ stories, index }) {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  const [relatedPosts, setRelatedPosts] = React.useState([]);
  const [morePosts, setMorePosts] = React.useState([]);

  React.useEffect(() => {
    const CMS_ENDPOINT = "student-stories?_sort=id:ASC";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data.data);
      index === 0
        ? setRelatedPosts(data.data.slice(3, 6))
        : setRelatedPosts(data.data.slice(0, 3));
      index === 0
        ? setMorePosts(data.data.slice(0, 3))
        : setMorePosts(data.data.slice(3, 6));
      console.log(data);
    });
  }, []);

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
        className={classes.storiesContainer}
        xs={10}
        sm={7}
        xl={7}
      >
        <Grid container justify="center" className={classes.storyContainer}>
          <Typography
            align="center"
            variant="h4"
            className={classes.storyTitle}
          >
            {content[index * 2] ? content[index * 2].title : ""}
          </Typography>
          <Grid container>
            <img
              className={classes.storyImg}
              src={dudeAtTable}
              alt="student story"
            />
          </Grid>
          <Typography variant="body1" className={classes.storyDescription}>
            {content[index * 2] ? content[index * 2].description : ""}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.stepperContainer} sm={5}>
        <VerticalStepper
          more="Post on this page"
          related="Related posts"
          posts={content[index] ? [morePosts, relatedPosts] : []}
        />
      </Grid>
    </Grid>
  );
}
