import { Grid, Paper, Typography } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
import Title from "../../shared/TitleComponent";

import { get_content } from "../../shared/Http";

import { useStyles } from "./styles";

export default function History() {
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
            <Title title={content ? content.title : ""} />
          </Grid>
        </Grid>
        {/* main container */}
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid container item sm={10}>
            {/* <PreceptorYear
              year={content && content.years[0].year}
              imgSrc={pics[0]}
            /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const PreceptorYear = ({ year, imgSrc, title }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.yearContainer}>
      <Typography variant="h2">{year}</Typography>
      <Grid container item md={4} sm={3}>
        <img src={imgSrc} alt={"preceptor hightight"} />
      </Grid>
      <Grid container item md={6} sm={8}>
        <Paper className={classes.yearCard} elevation={10}>
          Hello
        </Paper>
      </Grid>
    </Grid>
  );
};
