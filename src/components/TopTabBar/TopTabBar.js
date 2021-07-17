import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";

import './TopTabBar.scss';

class TopTabBar extends Component {

  render() {
    const {selectedExpectJobIndex, expectJobs, changeSelectedExpectJob, switchExpectJobPanel} = this.props;
    return (<div className="top-tap-bar-wrapper">
      <div className="top-tap-bar">
        <div className="top-tap-bar-tabs">
          {
            expectJobs && expectJobs.map((expectJob, index) => {
              return <div
                className={`top-tap-bar-tab ${selectedExpectJobIndex === index && "active"}`}
                onClick={() => changeSelectedExpectJob(index)}
              >
                {expectJob.job}
              </div>
            })
          }
        </div>
        <div className="top-tap-bar-actions">
          <span onClick={switchExpectJobPanel}><i className="icon-add_circle"/></span>
          <span><i className="icon-thumb_up" /></span>
        </div>
      </div>
    </div>)
  }
}

const mapState = (state) => ({
  expectJobs: state.home.expectJobs,
  selectedExpectJobIndex: state.home.selectedExpectJobIndex,
});

const mapDispatch = (dispatch) => ({
  changeSelectedExpectJob(selectedExpectJobIndex) {
    dispatch(actionCreators[actionTypes.CHANGE_SELECTED_EXPECT_JOB_INDEX](selectedExpectJobIndex));
  },
  switchExpectJobPanel() {
    dispatch(actionCreators[actionTypes.SWITCH_EXPECT_JOB_PANEL]());
  },
});

export default connect(mapState, mapDispatch)(TopTabBar);
