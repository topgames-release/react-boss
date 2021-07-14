import React, {Component} from "react";

import './IndustryFilter.scss';
import Filter from "../Filter/Filter";

export default class IndustryFilter extends Component {
  render() {
    const data = ['不限', '电子商务', '游戏', '媒体', '广告营销', '数据服务', '医疗健康', '生活服务', 'O2O', '旅游', '分类信息'];
    const {defaultValue, selectLabels} = this.props;
    return <Filter type='industry' title='行业' defaultValue={defaultValue} items={data} selectLabels={selectLabels}/>
  }
}
