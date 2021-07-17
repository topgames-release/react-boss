import React, {Component} from "react";

import './FinancingFilter.scss';
import Filter from "../Filter/Filter";

export default class FinancingFilter extends Component {
  render() {
    const data = ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '已上市', '不需要融资'];
    const {defaultValue, selectLabels} = this.props;
    return <Filter type='financing' title='融资阶段' defaultValue={defaultValue} items={data} selectLabels={selectLabels}/>
  }
}
