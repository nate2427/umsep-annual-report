import { Button, Grid, Typography } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import clsx from "clsx";
import React from "react";

import { get_content } from "../../../shared/Http";
import Title from "../../../shared/TitleComponent";

import { useStyles } from "./styles";

export default function History() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isFlipped1, setIsFlipped1] = React.useState(false);
  const [isFlipped2, setIsFlipped2] = React.useState(false);
  const [isFlipped3, setIsFlipped3] = React.useState(false);
  const [isFlipped4, setIsFlipped4] = React.useState(false);
  const [isFlipped5, setIsFlipped5] = React.useState(false);
  const [isFlipped6, setIsFlipped6] = React.useState(false);
  const [isFlipped7, setIsFlipped7] = React.useState(false);
  const [isFlipped8, setIsFlipped8] = React.useState(false);
  const [isFlipped9, setIsFlipped9] = React.useState(false);
  const [isFlipped10, setIsFlipped10] = React.useState(false);

  const flips = [
    [isFlipped, setIsFlipped],
    [isFlipped1, setIsFlipped1],
    [isFlipped2, setIsFlipped2],
    [isFlipped3, setIsFlipped3],
    [isFlipped4, setIsFlipped4],
    [isFlipped5, setIsFlipped5],
    [isFlipped6, setIsFlipped6],
    [isFlipped7, setIsFlipped7],
    [isFlipped8, setIsFlipped8],
    [isFlipped9, setIsFlipped9],
    [isFlipped10, setIsFlipped10],
  ];

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-history";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        <Title
          title={content.data ? content.data.pageTitle : ""}
          subtitle={content.data ? content.data.pageSubtitle : ""}
          sidebarColor={"blueBorder"}
          fontColor={"fontColorBlue"}
        />
        <Grid container className={classes.timelineContainer}>
          <Grid container className={classes.timelineInnerContainer}>
            {content.data &&
              content.data.tiles.map((tile, key) => {
                return (
                  <Grid
                    className={classes.tileContainer}
                    item
                    container
                    md={5}
                    lg={4}
                    justify="center"
                    key={key}
                  >
                    <ReactCardFlip
                      flipSpeedBackToFront={0.9}
                      flipSpeedFrontToBack={0.9}
                      isFlipped={flips[key][0]}
                      infinite={true}
                    >
                      <div
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className={classes.svgBackground}
                        onClick={() => flips[key][1](!flips[key][0])}
                      >
                        {tile.front}
                      </div>
                      <div
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className={classes.flippedBackground}
                        onClick={() => flips[key][1](!flips[key][0])}
                      >
                        {tile.back}
                      </div>
                    </ReactCardFlip>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
