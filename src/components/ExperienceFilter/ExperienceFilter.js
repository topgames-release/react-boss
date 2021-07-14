import React, {Component} from "react";

import './ExperienceFilter.scss';
import Filter from "../Filter/Filter";

export default class ExperienceFilter extends Component {
  render() {
    const data = ['不限', '在校生', '应届生', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上'];
    const {defaultValue, selectLabels} = this.props;
    return <Filter type='experience' title='经验要求' defaultValue={defaultValue} items={data} selectLabels={selectLabels}/>
  }
}
