import * as actionTypes from './action-types';
import requester from "../../utils/requester";

const actionCreators = {
  [actionTypes.GET_JOBS_DATA]() {
    return (dispatch) => {
      requester.get("/api/topic_list.json").then((res) => {
        const data = res.data;
        dispatch(actionTypes.GET_JOBS_DATA, data.data)
      }).catch((error) => {
        console.error(error);
      })
    }
  },
};

export default actionCreators;
