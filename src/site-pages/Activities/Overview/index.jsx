import { Grid, Typography } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
import { get_content } from "../../../shared/Http";
import Title from "../../../shared/TitleComponent";
import ActivitiesCard from "../../../shared/ActivitiesCard";
import pic from "../../../assets/StudentStories-UCLACaseCompetitionTeam2020.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";

export default function Home() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});
  const theme = useTheme();
  const screenSizeMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-activities-overview";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        <Title
          title={content.data ? content.data.title_subtitle.title : ""}
          subtitle={content.data ? content.data.title_subtitle.subtitle : ""}
          fontColor={"fontColorBlue"}
          borderColor={"blueBorder"}
        />
        <Grid container className={classes.mainContentContainer}>
          <Grid container>
            <Grid container className={classes.svgBackground}>
              <Grid container justify="center" xs={12} item lg={6}>
                <Grid
                  container
                  className={classes.heroImgContainer}
                  item
                  md={10}
                  xs={10}
                >
                  <img
                    src={pic}
                    className={classes.heroImg}
                    alt={"activities"}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="center" lg={6}>
                <Typography className={classes.heroParagraph1} variant="body1">
                  {content.data ? content.data.heroParagraph1 : ""}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Typography className={classes.heroParagraph2} variant="body1">
                {content.data ? content.data.heroParagraph2 : ""}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.activitiesTitleContainer}
            justify="center"
          >
            <Typography
              className={classes.activitiesTitle}
              variant="h2"
              align="center"
            >
              Activities
            </Typography>
            <Grid
              container
              className={classes.activitiesContainer}
              justify="center"
            >
              {content.data &&
                content.data.activities.map((activity, key) => (
                  <Grid
                    key={key}
                    className={classes.cardContainer}
                    item
                    container
                    justify="center"
                    xs={10}
                  >
                    <ActivitiesCard
                      key={key}
                      title={activity.title}
                      description={activity.description}
                      imgUrl={activity.imgUrl}
                      left={key % 2 === 0 ? false : true}
                      mobile={screenSizeMobile}
                      mobileLeft={key % 2 === 0 ? false : true}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
