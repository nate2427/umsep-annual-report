import React, { useState, forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";

import { ListItem, Button, Collapse } from "@material-ui/core";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const CustomRouterLink = forwardRef(function CustomLink(props, ref) {
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  );
});

const SidebarMenuListItem = (props) => {
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    label: Label,
    sidebarToggleMobile,
    setSidebarToggleMobile,
    dispatch,
    ...rest
  } = props;

  React.useEffect(() => console.log(sidebarToggleMobile));

  const router = useHistory();

  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const naviagteAndClose = (e, link) => {
    e.preventDefault();
    setSidebarToggleMobile(!sidebarToggleMobile);
    console.log("prevented default");

    router.push(link);
  };

  let paddingLeft = 22;

  if (depth > 0) {
    paddingLeft = 16 + 20 * depth;
  }
  const style = {
    paddingLeft,
  };

  if (children) {
    return (
      <ListItem
        {...rest}
        className={clsx("app-sidebar-item", className)}
        disableGutters
      >
        <Button
          color="primary"
          className={clsx("app-sidebar-button", { active: open })}
          onClick={handleToggle}
          style={style}
        >
          <span>{title}</span>
          {open ? (
            <ExpandLessIcon className="sidebar-expand-icon" color="inherit" />
          ) : (
            <ExpandLessIcon
              className="sidebar-expand-icon sidebar-expand-icon-rotate"
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        {...rest}
        className={clsx("app-sidebar-item", className)}
        disableGutters
      >
        <Button
          activeClassName="active-item"
          color="primary"
          variant="text"
          className={clsx("app-sidebar-button-wrapper", `depth-${depth}`)}
          component={CustomRouterLink}
          exact
          style={style}
          onClick={(e) => naviagteAndClose(e, href)}
          to={href}
        >
          {Icon && <Icon className="app-sidebar-icon" />}
          {title}
          {Label && (
            <span className="menu-item-label">
              <Label />
            </span>
          )}
        </Button>
      </ListItem>
    );
  }
};

SidebarMenuListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

SidebarMenuListItem.defaultProps = {
  depth: 0,
  open: false,
};

const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarMenuListItem);
