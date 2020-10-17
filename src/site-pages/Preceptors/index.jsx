import { Grid, Paper, Typography } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
import Title from "../../shared/TitleComponent";

import { get_content } from "../../shared/Http";

import { useStyles } from "./styles";

export default function Preceptors() {
  const classes = useStyles();
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    const CMS_ENDPOINT = "preceptors";
    get_content(CMS_ENDPOINT).then((data) => {
      let tempData = {
        title: data.data.title,
        description: data.data.description,
      };
      get_content("preceptor-years").then((data2) => {
        tempData.years = data2.data;
        console.log(tempData);
        setContent({ ...tempData });
      });
    });
  }, []);

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}
        <Grid container className={classes.heroOuterContainer}>
          <Grid container className={classes.heroContainer}>
            <Title title={content ? content.title : ""} />
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
                  <PreceptorYear
                    key={key}
                    year={content && year.year}
                    names={content && year.preceptor_names}
                  />
                ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const PreceptorYear = ({ year, names }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.yearContainer}>
      <Typography
        style={{
          fontSize: "3rem",
          fontFamily: "Merriweather, Merriweather sans",
          color: "#00274C",
        }}
        className={classes.year}
        variant="h2"
      >
        {year && year}
      </Typography>
      <Grid
        container
        style={{ padding: "5rem 0" }}
        justify="center"
        item
        xs={10}
      >
        <Paper className={classes.yearCard} elevation={10}>
          <Grid container justify="center">
            {names &&
              names.sort((a, b) => a.hospitals < b.hospitals ? -1 : 1).map((name) => (
                <Grid
                  style={{ padding: "2rem" }}
                  container
                  direction="column"
                  item
                  xs={10}
                  sm={4}
                >
                  <Typography
                    align="center"
                    style={{
                      paddingBottom: ".5rem",
                      fontFamily: "Merriweather, Merriweather sans",
                      fontWeight: "bold",
                      color: "#FFCB05",
                    }}
                    variant="h5"
                  >
                    {name.hospitals}
                  </Typography>
                  <Typography
                    style={{
                      color: "#fff",
                      fontFamily: "Merriweather sans, sans-serif",
                    }}
                    align="center"
                    variant="body1"
                  >
                    {name.names}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
