import { Grid } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";

import { get_content } from "../../../shared/Http";
import Title from "../../../shared/TitleComponent";
import Tile from "../../../shared/Tile";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


import { useStyles } from "./styles";

export default function History() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});

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
        {/* arrow down */}
        <Grid container justify='flex-end' alignItems='flex-end' className={classes.arrowDownContainer}>
          <ArrowDownwardIcon style={{fontSize: '5rem', color: '#2F65A7'}}/>
        </Grid>
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
