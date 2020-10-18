import { Button, Card, CardContent, Grid } from "@material-ui/core";

import React from "react";

import { useStyles } from "./styles";

import pic from "../../assets/StudentStories-UCLACaseCompetitionTeam2020.jpg";
import clsx from "clsx";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Partnerships({
  title,
  description,
  preceptorButtonText,
  delay,
  image
}) {
  const classes = useStyles();
  const [showMore, setShowMore] = React.useState(false);
  let cardRef = React.useRef(null);
  const [ref, inView] = useInView({ threshold: 1 });
  const [hasAnimated, setHasAnimated] = React.useState(false);


  React.useEffect(() => {
    gsap.to(cardRef.current, {
      y: 200,
      duration: 0,
      opacity: 0,
      delay: 0.3,
      // position: "absolute",
      ease: "expo.easeInOut",
    });
    setHasAnimated(false);
    // eslint-disable-next-line
  }, []);

  const slideUp = () => {
    !hasAnimated &&
      gsap
        .to(cardRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 * delay,
          // position: "relative",
          ease: "expo.easeInOut",
        })
        .then(setHasAnimated(true));
  };

  inView ? slideUp() : console.log("not in view");

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={5}
      xl={3}
      className={classes.cardOtherContainer}
      ref={ref}
    >
      <motion.div ref={cardRef} style={{ width: "fit-content" }}>
        <Card className="mb-4">
          <img alt="..." className="card-img-top" src={image} />
          <CardContent
            className={clsx([
              "p-3",
              classes.cardContent,
              showMore && classes.showFullCardContent,
            ])}
          >
            <h5
              className={clsx([
                "card-title font-weight-bold font-size-lg",
                classes.title,
              ])}
            >
              {title}
            </h5>
            <p
              className={clsx([
                "card-text",
                classes.description,
                showMore && classes.showFullText,
              ])}
            >
              {description}
            </p>
            <Grid
              container
              className={classes.buttonContainer}
              item
              justify="flex-start"
              xs={10}
            >
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={() => setShowMore(!showMore)}
                classes={{
                  label: classes.buttonContained,
                }}
              >
                {preceptorButtonText}
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
