import * as actionTypes from './action-types';
import {getJobs} from "../../api/job";

const actionCreators = {
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
