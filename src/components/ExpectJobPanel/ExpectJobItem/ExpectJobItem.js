import React from "react";

import './ExpectJobItem.scss';

export default function ExpectJobItem(props) {
  return <div className="expect-job-item-wrapper">
    <div className="expect-job-item-left-wrapper">
      <div className="expect-job-item-title">
        <span>[{props.workSpace}]</span>
        <span>{props.job}</span>
      </div>
      <div className="expect-job-item-subtitle">
        <span>{props.salary}</span>
        <span>行业{props.industry}</span>
      </div>
    </div>
    <div className="expect-job-item-right-wrapper">
      <span>设置偏好</span>
      <span><i className="icon-arrow_lift" /></span>
    </div>
  </div>
}
