import { Grid, Typography } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
import Title from "../../../shared/TitleComponent";
import ReactCardFlip from "react-card-flip";

import { useStyles } from "./styles";
import { get_content } from "../../../shared/Http";
import clsx from "clsx";

export default function ProgramIntroduction() {
  const classes = useStyles();
  const [content, setContent] = React.useState(null);

  // get the content from the CMS
  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-program-overview";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data.data);
      console.log(data.data);
    });
  }, []);


  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}
        <Grid container style={{background: content && `url(${content.bgImgUrl})`, backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    }} className={classes.heroContainer}>
          <Title
            title={content ? content.title_subtitle.title : ""}
            subtitle={content ? content.title_subtitle.subtitle : ""}
          />
        </Grid>
        {/* paragraphs container */}
        <Grid
          container
          justify="center"
          className={classes.paragraphsContainer}
        >
          <Grid container lg={10} xl={8}>
            <Typography variant="body1" className={classes.smallText}>
              {content && content.paragraph1}
            </Typography>
            <Typography variant="h1" className={classes.largeText}>
              {content && content.bigText}
            </Typography>
            <Typography variant="body1" className={classes.smallText}>
              {content && content.paragraph2}
            </Typography>
            <Typography variant="body1" className={classes.smallText}>
              {content && content.paragraph3}
            </Typography>
          </Grid>
        </Grid>
        {/* statistical overview */}
        <Grid container justify="flex-start" className={classes.statOverview}>
          <Title
            title={content ? content.stat_title_subtitle.title : ""}
            subtitle={content ? content.stat_title_subtitle.subtitle : ""}
            sidebarColor={"blueBorder"}
            fontColor={"fontColorBlue"}
          />
          <Grid
            container
            className={classes.tileOuterContainer}
            justify="center"
          >
            <Grid
              container
              justify="center"
              className={classes.tileContainer}
              item
              xs={11}
              sm={10}
              xl={7}
            >
              {content &&
                content.quick_stats.map(({ front, back }, key) => {
                  return <Tile front={front} back={back} key={key} />;
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const Tile = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.tileInnerContainer}
      justify="center"
      item
      sm={4}
      xs={6}
    >
      <ReactCardFlip
        flipSpeedBackToFront={0.9}
        flipSpeedFrontToBack={0.9}
        isFlipped={isFlipped}
        infinite={true}
        flipDirection={"vertical"}
      >
        <Grid
          container
          className={classes.tile}
          onClick={() => setIsFlipped(!isFlipped)}
          justify="center"
          alignItems="center"
        >
          {front}
        </Grid>
        <Grid
          container
          className={clsx([classes.tile, classes.tileBack])}
          onClick={() => setIsFlipped(!isFlipped)}
          justify="center"
          alignItems="center"
        >
          {back}
        </Grid>
      </ReactCardFlip>
    </Grid>
  );
};
