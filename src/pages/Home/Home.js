import React, {Component} from "react";
import { connect } from 'react-redux';
import {actionTypes, actionCreators} from '../../store/home'
import TopTip from "../../components/TopTip/TopTip";
import Job from "../../components/Job/Job";

import './Home.scss';

class Home extends Component {
  componentDidMount() {
    const { getJobs } = this.props;
    getJobs();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { topTipTab: prevTopTipTab } = prevProps;
    const { topTipTab, getJobs } = this.props;
    if (topTipTab !== prevTopTipTab) {
      console.log('topTipTab', topTipTab);
      getJobs();
    }
  }

  render() {
    const { jobs } = this.props;
    if (!jobs) return null;
    return <div className='home'>
      <TopTip/>
      <div className='home-jobs'>
        {jobs.map(job => <Job {...job} />)}
      </div>
    </div>
  }
}

const mapState = (state) => ({
  topTipTab: state.home.topTipTab,
  jobs: state.home.jobs,
});

const mapDispatch = (dispatch) => ({
  getJobs() {
    dispatch(actionCreators[actionTypes.GET_JOBS_DATA]());
  },
});

export default connect(mapState, mapDispatch)(Home);