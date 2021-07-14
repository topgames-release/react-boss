import React, {Component} from "react";

import './Scroll.scss';

export default class Scroll extends Component {
  render() {
    const {children} = this.props;
    return <div>{children}</div>
  }
}
