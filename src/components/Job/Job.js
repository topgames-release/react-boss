import React, {Component} from "react";

import './Job.scss';

export default class Job extends Component {
  render() {
    return (<div className="job">
      <div className="title">
        <span className="title-text">web前端</span>
        <span className="salary">6-10K</span>
      </div>
      <div className="name">
        <span className="company">青岛商至信集团</span>
        <span className="financing">未融资</span>
        <span className="people">100-500人</span>
      </div>
      <div className="labels">
        <span>1-3年</span>
        <span>大专</span>
        <span>前端开发</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
      <div className="recruiter">
        <div className="user-wrap">
          <img
            src="https://img.bosszhipin.com/beijin/upload/tmp/20201112/824ad8444af6e28022bf0b588f90b5eab53c9c0ad3006adb7af596ef463fee2a_s.jpg?x-oss-process=image/resize,w_100,limit_0"
            alt="" />
            <div className="name">杨先生·HRBP</div>
        </div>
        <div className="workspace-wrap">
          <div className="workspace">青岛市 黄岛区</div>
          <i className="icon-close" />
        </div>
      </div>
    </div>)
  }
}
