import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { scroller } from "react-scroll";
import { useHistory } from "react-router";

import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import { Grid } from "@material-ui/core";

export default function MUI_Stepper({ posts, more, related, page }) {
  return (
    <VerticalLinearStepper
      posts={posts}
      more={more}
      related={related}
      page={page}
    />
  );
}

const names = [
  "story-1",
  "story-2",
  "story-3",
  "story-4",
  "story-5",
  "story-6",
];

function VerticalLinearStepper({ posts, more, related, page }) {
  const classes = useStyles();
  const router = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);

  const scrollToStory = (index) => {
    scroller.scrollTo(names[index], {
      containerId: "story-scroll-cntr",
      smooth: true,
      duration: 1000,
    });
    setActiveStep(index);
  };

  const goToNextPage = () => {
    router.push(
      `/student-stories/${page === 0 ? "health-equity" : "virtual-boot-camps"}`
    );
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.morePostContainer}>
        {/* current page stories stepper container */}
        {posts[0] &&
          posts.map((post, key) => (
            <Grid container key={key}>
              <Typography className={classes.morePost} variant="h5">
                {key === 0 ? more : related}
              </Typography>

              <Grid container justify="flex-start">
                <Stepper
                  style={{
                    backgroundColor: "#FFFAFA",
                  }}
                  activeStep={key === 0 ? activeStep : null}
                  orientation="vertical"
                >
                  {post ? (
                    post.map((label, index) => (
                      <Step key={index}>
                        <StepLabel
                          onClick={() =>
                            key === 0 ? scrollToStory(index) : goToNextPage()
                          }
                          classes={{ label: classes.stepperLabel }}
                        >
                          {label.title}
                        </StepLabel>
                      </Step>
                    ))
                  ) : (
                    <StepLabel key={"1"}>
                      <StepLabel>1</StepLabel>
                    </StepLabel>
                  )}
                </Stepper>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
