import React, { Fragment } from "react";

import clsx from "clsx";

import { Paper } from "@material-ui/core";

import { connect } from "react-redux";

const Footer = (props) => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        className={clsx("app-footer text-black-50", {
          "app-footer--fixed": footerFixed,
        })}
      >
        <div className="app-footer--inner">
          <div className="app-footer--second">
            <span>
              University of Michigan School of Public Health - Summer Enrichment
              Program 2016 - 2019 Annual Report
            </span>{" "}
            © 2020 - created by{" "}
            <a
              href="https://natebaker.me"
              rel="noopener"
              // eslint-disable-next-line
              target="_blank"
              title="Mibase, LLC"
            >
              Mibase, LLC
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  footerFixed: state.ThemeOptions.footerFixed,
});
export default connect(mapStateToProps)(Footer);
