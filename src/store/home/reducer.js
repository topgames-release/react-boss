import {
  GET_JOBS_DATA,
  CHANGE_TOP_TIP_TAB,
  CHANGE_TOP_TIP_ADDRESS,
  CHANGE_TOP_TIP_FILTERS,
  CHANGE_TOP_TIP_KEYWORDS,
  CHANGE_TOP_TIP_DIALOG,
  GET_EXPECT_JOBS,
  CHANGE_SELECTED_EXPECT_JOB_INDEX,
  SWITCH_EXPECT_JOB_PANEL,
  SWITCH_ADD_EXPECT_JOB_PANEL
} from './action-types'

const defaultState = {
  expectJobs: [],
  selectedExpectJobIndex: 0,
  showExpectJobPanel: false,
  showAddExpectJobPanel: false,

  topTipTab: 'recommend',

  dialogType: '',
  address: '全国',
  filters: {},
  keywords: {},

  jobs: []
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_EXPECT_JOBS:
      return {
        ...state,
        expectJobs: action.expectJobs
      }
    case CHANGE_SELECTED_EXPECT_JOB_INDEX:
      return {
        ...state,
        selectedExpectJobIndex: action.selectedExpectJobIndex
      }
    case SWITCH_EXPECT_JOB_PANEL:
      return {
        ...state,
        showExpectJobPanel: action.showExpectJobPanel
      }
    case SWITCH_ADD_EXPECT_JOB_PANEL:
      return {
        ...state,
        showAddExpectJobPanel: action.showAddExpectJobPanel
      }
    case CHANGE_TOP_TIP_TAB:
      return {
        ...state,
        topTipTab: action.topTipTab
      }
    case CHANGE_TOP_TIP_DIALOG:
      return {
        ...state,
        dialogType: action.dialogType
      }
    case CHANGE_TOP_TIP_ADDRESS:
      return {
        ...state,
        address: action.address
      }
    case CHANGE_TOP_TIP_FILTERS:
      return {
        ...state,
        filters: action.filters
      }
    case CHANGE_TOP_TIP_KEYWORDS:
      return {
        ...state,
        keywords: action.keywords
      }
    case GET_JOBS_DATA:
      return {
        ...state,
        jobs: action.jobs,
      }
    default:
      return state
  }
}

export default homeReducer
