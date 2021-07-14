import {
  GET_JOBS_DATA,
  CHANGE_TOP_TIP_TAB,
  CHANGE_TOP_TIP_ADDRESS,
  CHANGE_TOP_TIP_FILTERS,
  CHANGE_TOP_TIP_KEYWORDS,
  CHANGE_TOP_TIP_DIALOG
} from './action-types'

const defaultState = {
  topTipTab: 'recommend',

  dialogType: '',
  address: '全国',
  filters: {},
  keywords: {},

  jobs: []
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
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
