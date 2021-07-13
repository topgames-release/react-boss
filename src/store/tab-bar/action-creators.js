import * as actionTypes from './action-types';

const actionCreators = {
  [actionTypes.CHANGE_TAB_BAR](tab) {
    return {
      type: actionTypes.CHANGE_TAB_BAR,
      currentTab: tab
    }
  }
};

export default actionCreators;
