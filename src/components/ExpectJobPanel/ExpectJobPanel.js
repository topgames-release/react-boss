import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";
import ExpectJobItem from "./ExpectJobItem/ExpectJobItem";

import './ExpectJobPanel.scss';

class ExpectJobPanel extends Component {
  render() {
    const {expectJobs, switchExpectJobPanel, switchAddExpectJobPanel} = this.props;
    return (<div className="expect-job-panel">
      <div className="expect-job-panel-header" onClick={switchExpectJobPanel}>
        <i className="icon-close" />
      </div>
      <div className="expect-job-panel-title-wrapper">
        <div className="expect-job-panel-title">想找什么工作?</div>
        <div className="expect-job-panel-tips">
          <span>{expectJobs && expectJobs.length}</span><span>/</span><span>3</span>
        </div>
      </div>
      <div className="expect-job-panel-subtitle-wrapper">
        添加多个求职期望, 可获得更多精准高薪工作机会
      </div>
      <div className="expect-jobs">
        {expectJobs && expectJobs.map(expectJob => <ExpectJobItem {...expectJob} />)}
      </div>
      {expectJobs && expectJobs.length < 3 && <div className="expect-job-panel-add-btn" onClick={switchAddExpectJobPanel}>
        <span><i className="icon-add_circle" /></span>
        <span>继续添加求职期望</span>
      </div>}
      <div className="expect-job-panel-status-wrapper">
        <div className="expect-job-panel-status-title">求职状态</div>
        <div className="expect-job-panel-status-value">
          <span>在职-考虑机会</span>
          <span><i className="icon-arrow_lift" /></span>
        </div>
      </div>
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
  switchAddExpectJobPanel() {
    dispatch(actionCreators[actionTypes.SWITCH_ADD_EXPECT_JOB_PANEL]());
  },
});

export default connect(mapState, mapDispatch)(ExpectJobPanel);
