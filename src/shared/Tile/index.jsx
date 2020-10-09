import { Grid } from "@material-ui/core";
import gsap from "gsap";
import React from "react";
import ReactCardFlip from "react-card-flip";

import { useStyles } from "./styles";

export default function Tile({ front, back, delay }) {
  const classes = useStyles();
  console.log(classes);
  const [isFlipped, setIsFlipped] = React.useState(false);
  let tileRef = React.useRef(null);

  React.useEffect(() => {
    console.log(tileRef);
    // testimonial animation
    gsap.from(tileRef, {
      x: 2000,
      duration: 1,
      delay: 0.15 * delay,
      ease: "expo.easeInOut",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Grid
      className={classes.tileContainer}
      item
      container
      sm={5}
      lg={4}
      justify="center"
      style={{ zIndex: isFlipped ? "1000" : "0" }}
    >
      <ReactCardFlip
        flipSpeedBackToFront={0.9}
        flipSpeedFrontToBack={0.9}
        isFlipped={isFlipped}
        infinite={true}
      >
        <div
          ref={(el) => (tileRef = el)}
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={classes.svgBackground}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {front}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={classes.flippedBackground}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {back}
        </div>
      </ReactCardFlip>
    </Grid>
  );
}
