import React, {Component} from "react";

import './Filter.scss';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    const {title, singleSelector, items} = this.props;
    return (<div className='filter'>
      <div className='filter-header'>
        <div className='left-container'>
          <div className='title'>{title}</div>
          {singleSelector && <div className='single-selector'>(单选)</div>}
        </div>
        <div className='right-container'>
          <span className='nums'>1</span>
          {items && items.length > 9 && <span className='action'><i className="icon-thumb_down"></i></span>}
        </div>
      </div>
      <div className='filter-labels'>
        {items && items.slice(0, 9).map(item => <span>{item}</span>)}
      </div>
    </div>)
  }
}
