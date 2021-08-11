import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../../store/home";

import './AddExpectJobPanel.scss';

class AddExpectJobPanel extends Component {

  save = () => {
    const {expectJobs} = this.props;

  }
  render() {
    const {switchAddExpectJobPanel} = this.props;
    return (<div className="add-expect-job-panel">
      <div className="add-expect-job-panel-header" onClick={switchAddExpectJobPanel}>
        <i className="icon-close" />
      </div>
      <div className="add-expect-job-panel-title-wrapper">
        <div className="add-expect-job-panel-title">添加求职期望</div>
      </div>
      <div className="add-expect-job-panel-subtitle-wrapper">
        求职期望的不同, 推荐的职位也会不同
      </div>
      <div className="add-expect-job-panel-btn-wrapper">
        <div className='add-expect-job-panel-save-btn' onClick={this.save}>保存</div>
      </div>
    </div>)
  }
}

const mapState = (state) => ({
  expectJobs: state.home.expectJobs,
});

const mapDispatch = (dispatch) => ({
  switchAddExpectJobPanel() {
    dispatch(actionCreators[actionTypes.SWITCH_ADD_EXPECT_JOB_PANEL]());
  },
});

export default connect(mapState, mapDispatch)(AddExpectJobPanel);
