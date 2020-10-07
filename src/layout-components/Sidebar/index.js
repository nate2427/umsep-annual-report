import React, { Fragment } from "react";

import clsx from "clsx";

import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Hidden,
  Drawer,
  Paper,
  Box,
  Tooltip,
  IconButton,
} from "@material-ui/core";

import { connect } from "react-redux";

import SidebarHeader from "../../layout-components/SidebarHeader";
import SidebarMenu from "../../layout-components/SidebarMenu";

import { useStyles } from "./styles";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import navItems from "./navItems";

import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

const Sidebar = (props) => {
  const classes = useStyles();

  const {
    setSidebarToggleMobile,
    sidebarToggleMobile,
    sidebarFixed,

    sidebarShadow,
  } = props;

  const closeDrawer = () => setSidebarToggleMobile(!sidebarToggleMobile);

  const sidebarMenuContent = (
    <div>
      {navItems.map((list) => (
        <SidebarMenu
          component="div"
          key={list.label}
          pages={list.content}
          title={list.label}
        />
      ))}
    </div>
  );

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <Fragment>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={sidebarToggleMobile}
          onClose={closeDrawer}
          variant="temporary"
          elevation={4}
          transitionDuration={700}
          className="app-sidebar-wrapper"
        >
          <SidebarHeader />

          <PerfectScrollbar>{sidebarMenuContent}</PerfectScrollbar>
        </Drawer>
        {
          <Box className="app-sidebar-header-btn-mobile">
            <Tooltip title="Toggle Sidebar">
              <IconButton
                color="inherit"
                onClick={toggleSidebarMobile}
                size="medium"
              >
                <MenuRoundedIcon className={classes.hamburgerIcon} />
              </IconButton>
            </Tooltip>
          </Box>
        }
      </Hidden>

      <Hidden smDown>
        <Paper
          className={clsx("app-sidebar-wrapper", {
            "app-sidebar-wrapper-fixed": sidebarFixed,
          })}
          square
          elevation={sidebarShadow ? 11 : 3}
        >
          <SidebarHeader />
          <div
            className={clsx({
              "app-sidebar-menu": sidebarFixed,
            })}
          >
            <PerfectScrollbar options={{ wheelPropagation: false }}>
              {sidebarMenuContent}
            </PerfectScrollbar>
          </div>
        </Paper>
      </Hidden>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  sidebarFixed: state.ThemeOptions.sidebarFixed,
  headerFixed: state.ThemeOptions.headerFixed,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
