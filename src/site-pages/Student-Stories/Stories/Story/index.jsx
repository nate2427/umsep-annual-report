import { Button, Collapse, Grid, Typography } from "@material-ui/core";
import React from "react";


import { useStyles } from "./styles";

export default function Story({ title, description, image}) {
  const classes = useStyles();
  const [showMore, setShowMore] = React.useState(false);
  const [showLess, setLessMore] = React.useState(true);

  const slideUp = () => {
    setShowMore(!showMore);
    setLessMore(!showLess);
  };
  const slideDown = () => {
    setShowMore(!showMore);
    setLessMore(!showLess);
  };

  return (
    <Grid container justify="center" className={classes.storyContainer}>
      <Typography align="center" variant="h4" className={classes.storyTitle}>
        {title ? title : ""}
      </Typography>
      <Grid container justify="center">
        <img
          className={classes.storyImg}
          src={image}
          alt="student story"
        />
      </Grid>

      <Collapse in={showMore} collapsedHeight={200}>
        <Typography variant="body1" className={classes.storyDescription}>
          {description ? description : ""}
        </Typography>
      </Collapse>
      <Grid
        className={classes.showMoreButtonContainer}
        justify="center"
        container
        item
        align="center"
      >
        <Button
          onClick={showMore ? slideDown : slideUp}
          className={classes.showMoreButton}
          variant="contained"
        >
          Show More
        </Button>
      </Grid>
    </Grid>
  );
}
