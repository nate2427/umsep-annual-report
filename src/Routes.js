import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";

import MuiTheme from "./theme";

// Layout Blueprints

import { LeftSidebar } from "./layout-blueprints";
import { Button, Grid, Typography } from "@material-ui/core";

const Home = lazy(() => import("./site-pages/Home/"));
const Preceptors = lazy(() => import("./site-pages/Preceptors"));
const Interns = lazy(() => import("./site-pages/Interns"));
const StrategicPlan = lazy(() => import("./site-pages/Strategic-Plan/"));
const ProgramIntroduction = lazy(() =>
  import("./site-pages/About/Program-Introduction")
);
const ProgramOverview = lazy(() =>
  import("./site-pages/About/Program-Overview")
);
const Leadership = lazy(() => import("./site-pages/About/Leadership"));
const History = lazy(() => import("./site-pages/About/History"));
const ActivitiesOverview = lazy(() =>
  import("./site-pages/Activities/Overview")
);
const Partnerships = lazy(() => import("./site-pages/Activities/Partnerships"));
const Innovations = lazy(() => import("./site-pages/Activities/Innovations"));
const StudentStories = lazy(() => import("./site-pages/Student-Stories"));

const Routes = () => {
  const location = useLocation();
  const router = useHistory();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0.9,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the site
              </div>
            </div>
          }
        >
          <Switch>
            <Route
              path={[
                "/about",
                "/activities",
                "/student-stories",
                "/strategic-plan",
                "/preceptors",
                "/interns",
                "/highlights",
                "/",
              ]}
            >
              <LeftSidebar>
                <Switch key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route exact path="/" component={Home} />
                    <Route
                      path="/about/program-introduction"
                      component={ProgramIntroduction}
                    />
                    <Route
                      path="/about/program-overview"
                      component={ProgramOverview}
                    />
                    <Route path="/about/leadership" component={Leadership} />
                    <Route path="/about/history" component={History} />
                    <Route
                      path="/activities/overview"
                      component={ActivitiesOverview}
                    />
                    <Route
                      path="/activities/partnerships"
                      component={Partnerships}
                    />
                    <Route
                      path="/activities/innovations"
                      component={Innovations}
                    />
                    <Route
                      path="/student-stories/:page/"
                      component={StudentStories}
                    />
                    <Route path="/preceptors" component={Preceptors} />
                    <Route path="/interns" component={Interns} />

                    <Route path="/strategic-plan" component={StrategicPlan} />
                     
                    <Route path='/page-not-found'>
                      <Grid container justify='center' alignItems='center' style={{height: '90vh'}}>
                        <Grid container justify='center' item xs={10}  >
                          <Typography align='center' style={{width: '100%', fontFamily: 'Merriweather, Merriweather sans', fontSize: '4rem', lineHeight: '6rem', fontWeight:'bold', paddingBottom: '2rem'}} variant='h1'>Page Not Found</Typography>
                          <Grid container item justify='center' md={6}>
                            
                          <Button onClick={() => router.push('/')} style={{padding: '1rem', backgroundColor: '#02274C', color: '#FFCB3D', fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}} variant='contained' fullWidth> Back to site</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Route>
                    {/* <Route render={() => <Redirect to="/page-not-found" />} /> */}
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
