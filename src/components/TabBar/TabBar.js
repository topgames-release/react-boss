import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import './TabBar.scss';

import {actionCreators, actionTypes} from '../../store/tab-bar';

class TabBar extends Component{
  render() {
    const {currentTab, toggleTab} = this.props;
    return (
      <div className='tab-bar-wrapper'>
        <div className='tab-bar border-1px-before'>
          <div className='tab-bar-item'>
            <Link to='/' onClick={() => toggleTab('')}>
              <span className={!currentTab ? 'active' : ''}><i className="iconfont">&#xe634;</i>职位</span>
            </Link>
          </div>
          <div className='tab-bar-item'>
            <Link to='/had' onClick={() => toggleTab('had')}>
              <span className={currentTab === 'had' ? 'active' : ''}><i className="iconfont">&#xe618;</i>有了</span>
            </Link>
          </div>
          <div className='tab-bar-item'>
            <Link to='/message' onClick={() => toggleTab('message')}>
              <span className={currentTab === 'message' ? 'active' : ''}><i className="iconfont">&#xe618;</i>消息</span>
            </Link>
          </div>
          <div className='tab-bar-item'>
            <Link to='/mine' onClick={() => toggleTab('mine')}>
              <span className={currentTab === 'mine' ? 'active' : ''}><i className="iconfont">&#xe618;</i>我的</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  currentTab: state.tabBar.currentTab,
});

const mapDispatch = (dispatch) => ({
  toggleTab(tabName) {
    dispatch(actionCreators[actionTypes.CHANGE_TAB_BAR](tabName));
  }
});

export default connect(mapState, mapDispatch)(TabBar);
