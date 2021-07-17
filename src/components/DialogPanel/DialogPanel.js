import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import EducationFilter from "../EducationFilter/EducationFilter";
import SalaryFilter from "../SalaryFilter/SalaryFilter";
import ExperienceFilter from "../ExperienceFilter/ExperienceFilter";
import IndustryFilter from "../IndustryFilter/IndustryFilter";
import FinancingFilter from "../FinancingFilter/FinancingFilter";
import {actionCreators, actionTypes} from "../../store/home";

import './DialogPanel.scss';

class DialogPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      keywords: {}
    }
  }

  clear = () => {
    const {dialogType, clearDialogType, changeFilters, changeKeywords} = this.props;
    if (dialogType === 'filters') {
      changeFilters({});
      clearDialogType();
    } else if (dialogType === 'keywords') {
      changeKeywords({});
      clearDialogType();
    }
  }

  confirm = () => {
    const {filters, keywords} = this.state;
    const {filters: pFilters} = this.props;
    const {dialogType, clearDialogType, changeFilters, changeKeywords} = this.props;
    if (dialogType === 'filters') {
      changeFilters({...pFilters, ...filters});
      clearDialogType();
    } else if (dialogType === 'keywords') {
      changeKeywords(keywords);
      clearDialogType();
    }
  }

  selectFilters = (type, selectors) => {
    const {filters} = this.state;
    filters[type] = selectors;
    this.setState({
      filters
    })
  }

  renderAddress = () => {
    return <div>Address</div>
  }

  renderFilters = () => {
    const {filters} = this.props;
    return (
      <Fragment>
        <EducationFilter defaultValue={filters.education || []} selectLabels={this.selectFilters} />
        <SalaryFilter defaultValue={filters.salary || []} selectLabels={this.selectFilters} />
        <ExperienceFilter defaultValue={filters.experience || []} selectLabels={this.selectFilters} />
        <IndustryFilter defaultValue={filters.industry || []} selectLabels={this.selectFilters} />
        <FinancingFilter defaultValue={filters.financing || []} selectLabels={this.selectFilters} />
      </Fragment>
    )
  }

  renderKeywords = () => {
    return <div>Keywords</div>
  }

  render() {
    const {address, dialogType, clearDialogType} = this.props;
    return (<div className='dialog-panel'>
      <div className='header'>
        <div className='close-button' onClick={clearDialogType}><i className="icon-close" /></div>
        <div className='title'>{dialogType === 'address' ? `${address}` : dialogType === 'filters' ? '筛选' : '关键词'}</div>
      </div>
      <div className='content'>
        {dialogType === 'address' && this.renderAddress()}
        {dialogType === 'filters' && this.renderFilters()}
        {dialogType === 'keywords' && this.renderKeywords()}
      </div>
      <div className='footer'>
        <div className='clear' onClick={this.clear}>清除</div>
        <div className='confirm' onClick={this.confirm}>确定</div>
      </div>
    </div>)
  }
}

const mapState = (state) => ({
  address: state.home.address,
  dialogType: state.home.dialogType,
  filters: state.home.filters,
});

const mapDispatch = (dispatch) => ({
  clearDialogType() {
    dispatch(actionCreators[actionTypes.CHANGE_TOP_TIP_DIALOG](''));
  },
  changeFilters(filters) {
    dispatch(actionCreators[actionTypes.CHANGE_TOP_TIP_FILTERS](filters));
  },
  changeKeywords(keywords) {
    dispatch(actionCreators[actionTypes.CHANGE_TOP_TIP_KEYWORDS](keywords));
  },
});

export default connect(mapState, mapDispatch)(DialogPanel);
