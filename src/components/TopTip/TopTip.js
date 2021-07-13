import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";

import './TopTip.scss';

class TopTip extends Component {
  render() {
    const {topTipTab, changeTopTipTab, address, changeDialogType, filters, keywords} = this.props;
    return (<div className='top-tip-wrapper'>
      <div className='top-tip'>
        <div className='tabs'>
          <span className={topTipTab === 'recommend' ? 'active' : ''} onClick={() => changeTopTipTab('recommend')}>推荐</span>
          {/*<span className={topTipTab === 'nearby' ? 'active' : ''} onClick={() => changeTopTipTab('nearby')}>附近</span>*/}
          <span className={topTipTab === 'latest' ? 'active' : ''} onClick={() => changeTopTipTab('latest')}>最新</span>
        </div>
        <div className='switches'>
          <span className={address ? 'active' : ''} onClick={() => changeDialogType('address')}>{address}</span>
          <span className={filters && filters.length > 0 ? 'active' : ''} onClick={() => changeDialogType('filters')}>筛选{filters && filters.length > 0 ? `~${filters.length}` : ''}</span>
          <span className={keywords && keywords.length > 0 ? 'active' : ''} onClick={() => changeDialogType('keywords')}>关键词{keywords && keywords.length > 0 ? `~${keywords.length}` : ''}</span>
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
