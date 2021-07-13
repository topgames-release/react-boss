import {CHANGE_TAB_BAR} from './action-types'

const defaultState = {
  currentTab: ''
}

const tabBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TAB_BAR:
      return {
        ...state,
        currentTab: action.currentTab,
      }
    default:
      return state
  }
}

export default tabBarReducer
