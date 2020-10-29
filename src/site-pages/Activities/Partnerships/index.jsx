import { Grid, Hidden, Typography } from "@material-ui/core";

import React from "react";

import { useStyles } from "./styles";
import { get_content } from "../../../shared/Http";
import Title from "../../../shared/TitleComponent";
import PreceptorSiteCard from "../../../shared/PreceptorSiteCard";

export default function Partnerships() {
  const classes = useStyles();
  const [content, setContent] = React.useState({});

  React.useEffect(() => {
    const CMS_ENDPOINT = "umsep-partnership";
    get_content(CMS_ENDPOINT).then((data) => {
      setContent(data);
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
          {/* hero content */}
          <Grid container justify='center'>
            <Grid container item xl={12}>
              <Hidden lgUp>
                <Grid container  justify="center" xs={12} item lg={6}>
                  <Grid
                    container
                    className={classes.heroImgContainer}
                    item
                    alignItems='stretch'
                    md={10}
                    xs={10}
                  >
                    <img
                      src={content.data ? content.data.heroImgUrl : ""}
                      className={classes.heroImg}
                      alt={"activities"}
                    />
                  </Grid>
                </Grid>
              </Hidden>

              <Grid container item xs={12} justify="center" lg={6}>
                <Typography className={classes.heroParagraph1} variant="body1">
                  {content.data ? content.data.heroParagraph1 : ""}
                </Typography>
              </Grid>
              <Hidden mdDown>
                <Grid container  justify="center" xs={12} item lg={6}>
                  <Grid
                    container
                    className={classes.heroImgContainer}
                    item
                    md={10}
                    xs={10}
                  >
                    <img
                      src={content.data ? content.data.heroImgUrl : ""}
                      className={classes.heroImg}
                      alt={"activities"}
                    />
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
            <Grid container className={classes.heroParagraph2Container}>
              <Typography className={classes.heroParagraph2} variant="body1">
                {content.data ? content.data.heroParagraph2 : ""}
              </Typography>
            </Grid>
          </Grid>
          {/* main content */}
          <Grid container className={classes.precetorSitesContainer}>
            <Title
              title={
                content.data
                  ? content.data.preceptor_sites_title_subtitle.title
                  : ""
              }
              subtitle={
                content.data
                  ? content.data.preceptor_sites_title_subtitle.subtitle
                  : ""
              }
              fontColor={"fontColorBlue"}
              borderColor={"blueBorder"}
            />
            {/* preceptor site ui cards */}
            <Grid container justify="center">
              <Grid
                container
                item
                justify="center"
                xs={10}
                className={classes.cardContainer}
              >
                {content.data &&
                  content.data.preceptor_sites.map((site, key) => (
                    <PreceptorSiteCard
                      key={key}
                      delay={key}
                      title={site.title}
                      description={site.description}
                      preceptorButtonText={content.data.preceptorButtonText}
                      image={site.imgUrl}
                    />
                  ))}
              </Grid>
              {/* middle image container with description */}
              <Grid
                container
                justify="center"
                className={classes.middleImgContainer}
              >
                <Grid container justify="center" item sm={8} xs={10} lg={7} xl={5}>
                  <img
                    className={classes.backgroundImg}
                    alt="precpetors"
                    src={content.data ? content.data.preceptorImageUrl : '/#'}
                  />
                </Grid>
                <Grid
                  container
                  className={classes.preceptorImgDescContainer}
                  item
                  lg={5}
                  sm={8}
                  xs={10}
                  xl={7}
                  justify="center"
                  alignItems='center'
                >
                  <Typography
                    className={classes.preceptorImgDesc}
                    variant="body1"
                  >
                    {content.data && content.data.preceptorImgDesc}
                  </Typography>
                </Grid>
              </Grid>
              {/* site visits section */}
              <Grid container className={classes.siteVisitsContainer}>
                <Title
                  title={
                    content.data
                      ? content.data.site_visits_title_subtitle.title
                      : ""
                  }
                  subtitle={
                    content.data
                      ? content.data.site_visits_title_subtitle.subtitle
                      : ""
                  }
                  fontColor={"fontColorBlue"}
                  borderColor={"blueBorder"}
                />
                {/* custom cards */}
                <Grid
                  container
                  justify="center"
                  className={classes.customCardContainer}
                >
                  <Grid
                    className={classes.firstCard}
                    container
                    justify="center"
                    item
                    xs={8}
                    md={6}
                  >
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      className={classes.customCard}
                      item
                      md={8}
                    >
                      <Typography
                        className={classes.customCardText}
                        variant="body1"
                      >
                        {content.data ? content.data.paragraph2 : ""}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container justify="center" item xs={8} md={6}>
                    <Grid
                      justify="center"
                      alignItems="center"
                      container
                      className={classes.customCard}
                      item
                      md={8}
                    >
                      <Typography
                        className={classes.customCardText}
                        variant="body1"
                      >
                        {content.data ? content.data.paragraph1 : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* long image and end description */}
                  <Grid container className={classes.bottomImgOuterContainer}>
                    <Grid container item xs={12}>
                      <div className={classes.bottomImg}></div>
                    </Grid>
                  </Grid>
                  {/* end description */}
                  <Grid
                    className={classes.lastParagraphOuterContainer}
                    container
                    justify="center"
                  >
                    <Grid
                      container
                      item
                      xs={11}
                      justify="center"
                      className={classes.lastParagraphContainer}
                    >
                      <Typography
                        variant={"body1"}
                        className={classes.lastParagraph}
                      >
                        {content.data ? content.data.lastParagraph : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
