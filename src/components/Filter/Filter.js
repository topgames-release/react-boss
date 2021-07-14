import React, {Component} from "react";

import './Filter.scss';

export default class Filter extends Component {
  render() {
    return (<div className='filter'>
      <div className='filter-header'>
        <div className='left-container'>
          <div className='title'>学历要求</div>
          <div className='title'>学历要求</div>
        </div>
        <div className='right-container'>
          <span className='nums'>1</span>
          <span className='action'><i className="icon-thumb_down"></i></span>
        </div>
      </div>
      <div className='labels'>
        <span>不限</span>
        <span>初中及以下</span>
        <span>中专/中技</span>
        <span>高中</span>
        <span>大专</span>
        <span>本科</span>
        <span>硕士</span>
        <span>博士</span>
      </div>
    </div>)
  }
}
