import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";
import ExpectJobItem from "./ExpectJobItem/ExpectJobItem";

import './ExpectJobPanel.scss';

class ExpectJobPanel extends Component {
  render() {
    const {expectJobs, switchExpectJobPanel} = this.props;
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
      <div className="expect-job-panel-add-btn">
        <i className="icon-add_circle" /> 继续添加求职期望
      </div>
      <div className="expect-job-panel-status-wrapper">
        <div className="expect-job-panel-status-title">求职状态</div>
        <div className="expect-job-panel-status-value">在职-考虑机会</div>
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
});

export default connect(mapState, mapDispatch)(ExpectJobPanel);
