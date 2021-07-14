import React, {Component} from "react";
import Filter from "../Filter/Filter";

import './EducationFilter.scss';

export default class EducationFilter extends Component {
  render() {
    const data = ['不限', '初中及以下', '中专/中技', '高中', '大专', '本科', '硕士', '博士'];
    const {defaultValue, selectLabels} = this.props;
    return <Filter type='education' title='学历要求' defaultValue={defaultValue} items={data} selectLabels={selectLabels}/>
  }
}
