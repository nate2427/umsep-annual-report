import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import { Grid } from "@material-ui/core";

export default function MUI_Stepper({ posts, more, related }) {
  return <VerticalLinearStepper posts={posts} more={more} related={related} />;
}

function VerticalLinearStepper({ posts, more, related }) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(null);
  const [activeStepRelated, setActiveStepRelated] = React.useState(null);
  React.useEffect(() => {
    console.log(posts[0]);
  });

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
                  activeStep={key === 0 ? activeStep : activeStepRelated}
                  orientation="vertical"
                >
                  {post ? (
                    post.map((label, index) => (
                      <Step key={index}>
                        <StepLabel
                          className={classes.stepperLabel}
                          onClick={() =>
                            key === 0
                              ? setActiveStep(index)
                              : setActiveStepRelated(index)
                          }
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
