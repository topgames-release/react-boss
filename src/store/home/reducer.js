import {GET_JOBS_DATA} from './action-types'

const defaultState = {
  jobs: []
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
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
