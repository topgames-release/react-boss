import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";

import './TopTip.scss';

class TopTip extends Component {

  getFilterCount = () => {
    const {filters} = this.props;
    if (!filters || Object.keys(filters).length === 0) return 0;
    return Object.keys(filters).reduce((prev, key) => prev + filters[key].length, 0);
  }

  getKeywordCount = () => {
    const {keywords} = this.props;
    if (!keywords || Object.keys(keywords).length === 0) return 0;
    return Object.keys(keywords).reduce((prev, key) => prev + keywords[key].length, 0);
  }

  render() {
    const {topTipTab, changeTopTipTab, address, changeDialogType} = this.props;
    const filterCount = this.getFilterCount();
    const keywordCount = this.getKeywordCount();
    return (<div className='top-tip-wrapper'>
      <div className='top-tip'>
        <div className='tabs'>
          <span className={topTipTab === 'recommend' ? 'active' : ''} onClick={() => changeTopTipTab('recommend')}>推荐</span>
          {/*<span className={topTipTab === 'nearby' ? 'active' : ''} onClick={() => changeTopTipTab('nearby')}>附近</span>*/}
          <span className={topTipTab === 'latest' ? 'active' : ''} onClick={() => changeTopTipTab('latest')}>最新</span>
        </div>
        <div className='switches'>
          <span className={address ? 'active' : ''} onClick={() => changeDialogType('address')}>{address}</span>
          <span className={filterCount > 0 ? 'active' : ''} onClick={() => changeDialogType('filters')}>筛选{filterCount > 0 ? `~${filterCount}` : ''}</span>
          <span className={keywordCount > 0 ? 'active' : ''} onClick={() => changeDialogType('keywords')}>关键词{keywordCount > 0 ? `~${keywordCount}` : ''}</span>
        </div>
      </div>
    </div>)
  }
}

const mapState = (state) => ({
  topTipTab: state.home.topTipTab,
  address: state.home.address,
  filters: state.home.filters,
  keywords: state.home.keywords,
});

const mapDispatch = (dispatch) => ({
  changeTopTipTab(topTipTab) {
    dispatch(actionCreators[actionTypes.CHANGE_TOP_TIP_TAB](topTipTab));
  },
  changeDialogType(dialogType) {
    dispatch(actionCreators[actionTypes.CHANGE_TOP_TIP_DIALOG](dialogType));
  },
});

export default connect(mapState, mapDispatch)(TopTip);
