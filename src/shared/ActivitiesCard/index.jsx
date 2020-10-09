import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

import gsap from "gsap";

import React from "react";

import { useStyles } from "./styles";

import pic from "../../assets/StudentStories-UCLACaseCompetitionTeam2020.jpg";
import { useIntersection } from "react-use";
import { useInView } from "react-intersection-observer";

export default function ActivitiesCard({ title, description, img, left }) {
  const classes = useStyles();
  let cardRef = React.useRef(null);
  let end = React.useRef(null);
  let start = React.useRef(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  img = pic;
  const intersection = useIntersection(cardRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const [ref, inView] = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    gsap.to(cardRef.current, {
      x: left ? -300 : 300,
      duration: 0,
      opacity: 0,
      delay: 0.1,
      ease: "expo.easeInOut",
    });
    // eslint-disable-next-line
  }, []);

  const slideIn = () => {
    !hasAnimated &&
      gsap
        .to(cardRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.easeInOut",
        })
        .then(setHasAnimated(true));
  };

  const slideOut = () => {};

  inView ? slideIn() : slideOut();

  return (
    <div ref={ref}>
      <motion.div ref={cardRef}>
        <Card className={classes.root}>
          {left && (
            <CardMedia
              className={classes.cover}
              image={img}
              title="Live from space album cover"
            />
          )}

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.title} component="h5" variant="h5">
                {title}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Typography className={classes.description} variant="body1">
                {description}
              </Typography>
            </div>
          </div>
          {!left && (
            <CardMedia
              className={classes.cover}
              image={img}
              title="Live from space album cover"
            />
          )}
        </Card>
      </motion.div>
    </div>
  );
}
