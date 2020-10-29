import { Grid, Typography } from "@material-ui/core";
import gsap from "gsap";
import React from "react";
import ReactCardFlip from "react-card-flip";

import { useStyles } from "./styles";

export default function Tile({ front, back, delay, num }) {
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
        containerStyle={{padding: '2rem'}}
      >
        <div
          ref={(el) => (tileRef = el)}
          style={{
            color: "#FFCB3D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: 'relative'
          }}
          className={classes.svgBackground}
          onClick={() => setIsFlipped(!isFlipped)}
        >
           <Typography style={{position: 'absolute', color: 'white', zIndex: 1000, bottom: 5, right: 50, fontWeight: 'bold'}} variant='body2'>{num}</Typography>
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
