import React, { Fragment } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { IconButton, Box, Tooltip } from "@material-ui/core";

import { connect } from "react-redux";

import { useStyles } from "./styles";
import projectLogo from "../../assets/Webp.net-resizeimage.png";

import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const SidebarHeader = (props) => {
  const classes = useStyles();

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const { sidebarToggleMobile, setSidebarToggleMobile } = props;

  return (
    <Fragment>
      <div className={clsx("app-sidebar-header", {})}>
        <Box
          className="header-logo-wrapper"
          title="Carolina React Admin Dashboard with Material-UI Free"
        >
          <Link to="/home" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className={clsx(["header-logo-wrapper-btn", classes.logoCircle])}
            >
              <img
                className="app-sidebar-logo"
                alt="Carolina React Admin Dashboard with Material-UI Free"
                src={projectLogo}
              />
            </IconButton>
          </Link>
          <Box className="header-logo-text">UMSEP</Box>
        </Box>
        {sidebarToggleMobile && (
          <Box className="app-sidebar-header-btn-mobile-2">
            <Tooltip title="Toggle Sidebar" placement="right">
              <IconButton
                color="inherit"
                onClick={toggleSidebarMobile}
                size="medium"
              >
                {sidebarToggleMobile ? (
                  <MenuOpenRoundedIcon className={classes.hamburgerIcon} />
                ) : (
                  <MenuRoundedIcon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
