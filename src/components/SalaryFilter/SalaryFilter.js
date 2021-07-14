import React, {Component} from "react";
import Filter from "../Filter/Filter";

import './SalaryFilter.scss';

export default class SalaryFilter extends Component {
  render() {
    const data = ['不限', '3K以下', '3-5K', '5-7K', '7-9K', '9-12K', '12K以上'];
    return <Filter title='薪资待遇' singleSelector items={data}/>
  }
}
