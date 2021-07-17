import React, {Component} from "react";
import { connect } from 'react-redux';
import {actionTypes, actionCreators} from '../../store/home'
import TopTabBar from "../../components/TopTabBar/TopTabBar";
import TopTip from "../../components/TopTip/TopTip";
import Job from "../../components/Job/Job";

import './Home.scss';

class Home extends Component {
  componentDidMount() {
    const { getExpectJobs, getJobs } = this.props;
    getExpectJobs();
    // todo
    getJobs();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { topTipTab: prevTopTipTab } = prevProps;
    const { topTipTab, getJobs } = this.props;
    // todo
    if (topTipTab !== prevTopTipTab) {
      getJobs();
    }
  }

  render() {
    const { jobs } = this.props;
    if (!jobs) return null;
    return <div className='home'>
      <TopTabBar/>
      <TopTip/>
      <div className='home-jobs'>
        {jobs.map(job => <Job key={job.id} {...job} />)}
      </div>
    </div>
  }
}

const mapState = (state) => ({
  expectJobs: state.home.expectJobs,
  selectedExpectJobIndex: state.home.selectedExpectJobIndex,
  topTipTab: state.home.topTipTab,
  address: state.home.address,
  filters: state.home.filters,
  keywords: state.home.keywords,
  jobs: state.home.jobs,
});

const mapDispatch = (dispatch) => ({
  getExpectJobs() {
    dispatch(actionCreators[actionTypes.GET_EXPECT_JOBS]());
  },
  getJobs() {
    dispatch(actionCreators[actionTypes.GET_JOBS_DATA]());
  },
});

export default connect(mapState, mapDispatch)(Home);
