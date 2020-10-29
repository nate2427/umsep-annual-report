import { Grid, Paper, Typography } from "@material-ui/core";

import React from "react";
import Title from "../../shared/TitleComponent";

import { get_content } from "../../shared/Http";

import { useStyles } from "./styles";

export default function Interns() {
  const classes = useStyles();
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    const CMS_ENDPOINT = "students";
    get_content(CMS_ENDPOINT).then((data) => {
      let tempData = {
        title: data.data.title,
        description: data.data.description,
      };
      get_content("student-years").then((data2) => {
        tempData.years = data2.data;
        get_content("wheres").then((data3) => {
          tempData.wheres = data3.data;
          console.log(tempData);
          setContent({ ...tempData });
        });
      });
    });
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}
        <Grid container className={classes.heroOuterContainer}>
          <Grid container className={classes.heroContainer}>
            <Title title={content ? content.title : ""} subtitle=''/>
          </Grid>
        </Grid>
        {/* main container */}
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid
            container
            item
            xs={11}
            xl={9}
            className={classes.descriptionContainer}
          >
            <Typography variant="body1" className={classes.description}>
              {content && content.description}
            </Typography>
          </Grid>
          <Grid container item xs={11} xl={9}>
            {content &&
              content.years
                .sort((a, b) => a.year < b.year ? -1 : 1)
                .map((year, key) => (
                  <InternYear
                    key={key}
                    year={content && year.year}
                    where={content && content.wheres[key]}
                    interns={content && year.interns}
                    schools={content && year.undergrad_institutions}
                    image={content && year.imgUrl}
                  />
                ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const InternYear = ({ year, where, interns, schools, image }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.yearContainer} justify="center">
      <Typography
        style={{
          fontSize: "3rem",
          fontFamily: "Merriweather, Merriweather sans",
          color: "#00274C",
        }}
        className={classes.year}
        variant="h2"
      >
        {year}
      </Typography>
      <Grid
        container
        style={{ paddingTop: "5rem" }}
        justify="center"
        item
        xs={11}
        className={classes.imageContainer}
      >
        <img className={classes.yearImg} src={image} alt={'preceptor year'} />
      </Grid>
      <Grid
        container
        style={{ paddingBottom: "5rem" }}
        justify="center"
        item
        xs={11}
      >
        <Grid className={classes.paperContainer} container item sm={4}>
          <Paper className={classes.yearCard} elevation={10}>
            <Typography
              style={{
                color: "#FFCB3D",
                fontFamily: "Merriweather, Merriweather sans",
                fontSize: "1rem",
                paddingBottom: "1rem",
                fontWeight: "bold",
              }}
              variant="h5"
            >
              Interns
            </Typography>
            {interns.sort((a, b) => a.name.split(" ")[1] < b.name.split(" ")[1] ? -1 : 1).map((intern, key) => (
              <Typography key={key} className={classes.intern} variant="body1">
                {intern.name}
              </Typography>
            ))}
          </Paper>
        </Grid>
        <Grid className={classes.paperContainer} container item sm={4}>
          <Paper className={classes.yearCard} elevation={10}>
            <Typography
              style={{
                color: "#FFCB3D",
                fontFamily: "Merriweather, Merriweather sans",
                fontSize: "1rem",
                paddingBottom: "1rem",
                fontWeight: "bold",
                align: "center",
                width: "100%",
              }}
              variant="h5"
            >
              Undergraduate Institutions
            </Typography>
            {schools.sort((a, b) => a.school < b.school ? -1 : 1).map((school, key) => (
              <Typography key={key} className={classes.intern} variant="body1">
                {school.school}
              </Typography>
            ))}
          </Paper>
        </Grid>
        <Grid className={classes.paperContainer} container item sm={4}>
          <Paper className={classes.yearCard} elevation={10}>
            <Typography
              style={{
                color: "#FFCB3D",
                fontFamily: "Merriweather, Merriweather sans",
                fontSize: "1rem",
                paddingBottom: "1rem",
                fontWeight: "bold",
              }}
              variant="h5"
            >
              Where They Are Now
            </Typography>
            {where.student_healths.length > 0 && (
              <Grid container className={classes.industryContainer}>
                <Typography className={classes.industryTitle} variant="body1">
                  Health Industry Occupations:
                </Typography>
                {where.student_healths.sort((a, b) => a.industry < b.industry ? -1 : 1).map((industry, key) => (
                  <Typography
                    key={key}
                    className={classes.industry}
                    variant="body1"
                  >
                    {industry.industry}
                  </Typography>
                ))}
              </Grid>
            )}
            {where.other_industries.length > 0 && (
              <Grid container className={classes.industryContainer}>
                <Typography className={classes.industryTitle} variant="body1">
                  Other Industries:
                </Typography>
                {where.other_industries.sort((a, b) => a.industry < b.industry ? -1 : 1).map((industry, key) => (
                  <Typography
                    key={key}
                    className={classes.industry}
                    variant="body1"
                  >
                    {industry.industry}
                  </Typography>
                ))}
              </Grid>
            )}
            {where.public_healths.length > 0 && (
              <Grid container className={classes.industryContainer}>
                <Typography className={classes.industryTitle} variant="body1">
                  Public Health Graduate Education:
                </Typography>
                {where.public_healths.sort((a, b) => a.school < b.school ? -1 : 1).map((industry, key) => (
                  <Typography
                    key={key}
                    className={classes.industry}
                    variant="body1"
                  >
                    {industry.school}
                  </Typography>
                ))}
              </Grid>
            )}
            {where.other_grads.length > 0 && (
              <Grid container className={classes.industryContainer}>
                <Typography className={classes.industryTitle} variant="body1">
                  Other Graduate Education:
                </Typography>
                {where.other_grads.sort((a, b) => a.industry < b.industry ? -1 : 1).map((industry, key) => (
                  <Typography
                    key={key}
                    className={classes.industry}
                    variant="body1"
                  >
                    {industry.gradschool}
                  </Typography>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
