import { Grid } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
// import clsx from "clsx";
import React from "react";
import gsap from "gsap";

import { get_content } from "../../../shared/Http";
import Title from "../../../shared/TitleComponent";
import Tile from "../../../shared/Tile";

import { useStyles } from "./styles";

export default function History() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  let tileRefs = React.useRef([]);

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
          <Grid
            container
            className={classes.timelineInnerContainer}
            justify="center"
          >
            {content.data &&
              content.data.tiles.map((tile, key) => {
                return (
                  <Tile
                    front={tile.front}
                    back={tile.back}
                    key={key}
                    delay={key * 1}
                  />
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
