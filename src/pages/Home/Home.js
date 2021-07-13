import React, {Component} from "react";
import { connect } from 'react-redux';
import {actionTypes, actionCreators} from '../../store/home'

class Home extends Component{
  componentDidMount() {
    const { getJobs } = this.props;
    getJobs();
  }

  render() {
    const { jobs } = this.props;
    return (<div>Home</div>)
  }
}

const mapState = (state) => ({
  jobs: state.home.jobs,
});

const mapDispatch = (dispatch) => ({
  getJobs() {
    dispatch(actionCreators[actionTypes.GET_JOBS_DATA]());
  },
});

export default connect(mapState, mapDispatch)(Home);
