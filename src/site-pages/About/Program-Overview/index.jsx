import { Grid, Typography } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
import Title from "../../../shared/TitleComponent";
import ReactCardFlip from "react-card-flip";

import { useStyles } from "./styles";
import { get_content } from "../../../shared/Http";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";


export default function ProgramIntroduction() {
  const classes = useStyles();
  const [content, setContent] = React.useState(null);
  const [ref, inView] = useInView({ threshold: .7 });
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const chrisImgRef = React.useRef(null);




  // get the content from the CMS
  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-program-overview";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data.data);
      console.log(data.data);
    });
  }, []);

  const appear = () => {
    !hasAnimated &&
      gsap
        .to(chrisImgRef.current, {
          scale: 1,
          duration: 0.7,
          delay: .1,
          ease: "expo.easeInOut",
        })
        .then(() => setHasAnimated(!hasAnimated));

  }

  const disappear = () => {
    !hasAnimated &&
    gsap
      .to(chrisImgRef.current, {
        scale: 0,
        duration: 0.3,
        delay: 0,
        ease: "expo.easeInOut",
      })
  }

  inView ? appear() : disappear();

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
            <Grid style={{overflow: 'hidden'}} container justify='center' >
            <div ref={ref}>
              <img className={classes.chris} ref={chrisImgRef} src={'https://res.cloudinary.com/mibase/image/upload/v1604965356/freelance/clients/UMSEP/Christopher-Clarke_lxo9mc.jpg'} alt={'Mr. Christopher A. Clarke'} />
              </div></Grid>
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
