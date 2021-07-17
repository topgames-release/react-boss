import * as actionTypes from './action-types';
import {getExpectJobs, getJobs} from "../../api/job";

const actionCreators = {
  [actionTypes.GET_EXPECT_JOBS]() {
    return (dispatch) => {
      getExpectJobs().then((res) => {
        const data = res.data;
        dispatch({
          type: actionTypes.GET_EXPECT_JOBS,
          expectJobs: data.data
        })
      }).catch((error) => {
        console.error(error);
      })
    }
  },
  [actionTypes.CHANGE_SELECTED_EXPECT_JOB_INDEX](selectedExpectJobIndex) {
    return {
      type: actionTypes.CHANGE_SELECTED_EXPECT_JOB_INDEX,
      selectedExpectJobIndex
    }
  },
  [actionTypes.SWITCH_EXPECT_JOB_PANEL]() {
    return (dispatch, getState) => {
      const state = getState();
      dispatch({
        type: actionTypes.SWITCH_EXPECT_JOB_PANEL,
        showExpectJobPanel: !state.home.showExpectJobPanel
      })
    }
  },
  [actionTypes.CHANGE_TOP_TIP_TAB](topTipTab) {
    return {
      type: actionTypes.CHANGE_TOP_TIP_TAB,
      topTipTab
    }
  },
  [actionTypes.CHANGE_TOP_TIP_DIALOG](dialogType) {
    return {
      type: actionTypes.CHANGE_TOP_TIP_DIALOG,
      dialogType
    }
  },
  [actionTypes.CHANGE_TOP_TIP_ADDRESS](address) {
    return {
      type: actionTypes.CHANGE_TOP_TIP_ADDRESS,
      address
    }
  },
  [actionTypes.CHANGE_TOP_TIP_FILTERS](filters) {
    return {
      type: actionTypes.CHANGE_TOP_TIP_FILTERS,
      filters
    }
  },
  [actionTypes.CHANGE_TOP_TIP_KEYWORDS](keywords) {
    return {
      type: actionTypes.CHANGE_TOP_TIP_KEYWORDS,
      keywords
    }
  },
  [actionTypes.GET_JOBS_DATA]() {
    return (dispatch) => {
      getJobs().then((res) => {
        const data = res.data;
        dispatch({
          type: actionTypes.GET_JOBS_DATA,
          jobs: data.data.items
        })
      }).catch((error) => {
        console.error(error);
      })
    }
  },
};

export default actionCreators;
