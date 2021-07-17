import React, {Component} from "react";

import './TopTabBar.scss';

export default class TopTabBar extends Component {
  render() {
    return (<div className="top-tap-bar-wrapper">
      <div className="top-tap-bar">
        <div className="top-tap-bar-tabs">
          <div className="top-tap-bar-tab">Web前端</div>
          <div className="top-tap-bar-tab">Java</div>
        </div>
        <div className="top-tap-bar-actions">
          <span><i className="icon-add_circle" /></span>
          <span><i className="icon-thumb_up" /></span>
        </div>
      </div>
    </div>)
  }
}
