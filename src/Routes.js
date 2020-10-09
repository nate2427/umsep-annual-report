import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";

import MuiTheme from "./theme";

// Layout Blueprints

import { LeftSidebar } from "./layout-blueprints";

const ListGroups = lazy(() => import("./example-pages/ListGroups"));
const Home = lazy(() => import("./site-pages/Home/"));
const ProgramIntroduction = lazy(() =>
  import("./site-pages/About/Program-Overview")
);
const Leadership = lazy(() => import("./site-pages/About/Leadership"));
const History = lazy(() => import("./site-pages/About/History"));
const ActivitiesOverview = lazy(() =>
  import("./site-pages/Activities/Overview")
);
const Partnerships = lazy(() => import("./site-pages/Activities/Partnerships"));

const Routes = () => {
  const location = useLocation();

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
            <Redirect exact from="/" to="/home" />
            <Route
              path={[
                "/about",
                "/activities",
                "/student-stories",
                "/strategic-plan",
                "/preceptors",
                "/interns",
                "/highlights",
                "/home",
              ]}
            >
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route
                      path="/about/program-overview"
                      component={ProgramIntroduction}
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
                    <Route path="/student-stories" component={ListGroups} />
                    <Route path="/strategic-plan" component={ListGroups} />
                    <Route path="/preceptors" component={ListGroups} />
                    <Route path="/interns" component={ListGroups} />
                    <Route path="/highlights" component={ListGroups} />
                    <Route path="/home" component={Home} />
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
