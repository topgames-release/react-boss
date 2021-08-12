import React, {Component} from "react";
import { connect } from 'react-redux';
import {actionTypes, actionCreators} from '../../store/home'
import TopTabBar from "../../components/TopTabBar/TopTabBar";
import TopTip from "../../components/TopTip/TopTip";
import Job from "../../components/Job/Job";
import Scroll from "../../components/Scroll/Scroll";
import Loader from "../../components/Loader/Loader";

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushDown: false,
      pullUp: false,
    }
  }
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

  listenScroll = pos => {
    console.log('listenScroll', pos);
  }

  pushDown = () => {
    this.setState({
      pushDown: true,
    });
    setTimeout(() => {
      this.setState({
        pushDown: false,
      });
    }, 2000);
  }

  pullUp = () => {
    this.setState({
      pullUp: true,
    });
    setTimeout(() => {
      this.setState({
        pullUp: false,
      });
    }, 2000);
  }

  render() {
    const { pushDown, pullUp } = this.state;
    const { jobs } = this.props;
    if (!jobs) return null;
    return <div className={`home ${pullUp ? 'bottom' : ''}`}>
      <TopTabBar/>
      <TopTip/>
      {pushDown && <div className="home-pull-down-loader">
        <Loader />
      </div>}
      <div className={`home-jobs ${pushDown ? 'no-margin-top' : 'margin-top'}`}>
        <Scroll listenScroll={this.listenScroll} pushDown={this.pushDown} pullUp={this.pullUp} data={jobs}>
          <div>
            {jobs.map(job => <Job key={job.id} {...job} />)}
          </div>
        </Scroll>
      </div>
      {pullUp && <div className="home-pull-up-loader">
        <Loader />
      </div>}
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
