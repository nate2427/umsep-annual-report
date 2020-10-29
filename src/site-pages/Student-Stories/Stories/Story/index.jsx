import { Button, Collapse, Grid, IconButton, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";


import { useStyles } from "./styles";

export default function Story({ title, description, image, image2}) {
  const classes = useStyles();
  const [showMore, setShowMore] = React.useState(false);
  const [showLess, setLessMore] = React.useState(true);
  const [displayImage, setDisplayImage] = React.useState(image);


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

      <Grid container justify="center" style={{position: 'relative'}}>
        <img
          className={classes.storyImg}
          src={displayImage}
          alt="student story"
        />
        {
          image2 && <IconButton className={classes.nextImgButton} onClick={() => {
            console.log(image, image2)
            displayImage === image ? setDisplayImage(image2) : setDisplayImage(image);
          }}>
          <ArrowForward style={{fontSize: '2rem', }} fontSize='large' />
        </IconButton>
        }
        
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
