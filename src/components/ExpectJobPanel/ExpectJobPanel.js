import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";

import './ExpectJobPanel.scss';

class ExpectJobPanel extends Component {
  render() {
    const {switchExpectJobPanel} = this.props;
    return (<div className="expect-job-panel">
      <div className="expect-job-panel-header" onClick={switchExpectJobPanel}>
        <i className="icon-close" />
      </div>
      <div>ExpectJobPanel</div>
    </div>)
  }
}

const mapState = (state) => ({
  expectJobs: state.home.expectJobs,
});

const mapDispatch = (dispatch) => ({
  switchExpectJobPanel() {
    dispatch(actionCreators[actionTypes.SWITCH_EXPECT_JOB_PANEL]());
  },
});

export default connect(mapState, mapDispatch)(ExpectJobPanel);
