import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Filter from "../Filter/Filter";
import {actionCreators, actionTypes} from "../../store/home";

import {getFilters} from "../../api/filter";
import {getKeywords} from "../../api/keyword";

import './DialogPanel.scss';

class DialogPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtersData: [],
      keywordsData: [],
      filters: {},
      keywords: {}
    }
  }

  componentDidMount() {
    const {dialogType} = this.props;
    if (dialogType === 'filters') {
      getFilters().then((res) => {
        const {code} = res.data;
        if (code === 20000) {
          this.setState({
            filtersData: res.data.data
          })
        }
      }).catch(console.error)
    } else if (dialogType === 'keywords') {
      getKeywords().then((res) => {
        const {code} = res.data;
        if (code === 20000) {
          this.setState({
            keywordsData: res.data.data
          })
        }
      }).catch(console.error)
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
    const {filters: pFilters, keywords: pKeywords} = this.props;
    const {dialogType, clearDialogType, changeFilters, changeKeywords} = this.props;
    if (dialogType === 'filters') {
      changeFilters({...pFilters, ...filters});
      clearDialogType();
    } else if (dialogType === 'keywords') {
      changeKeywords({...pKeywords, ...keywords});
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

  selectKeywords = (type, selectors) => {
    const {keywords} = this.state;
    keywords[type] = selectors;
    this.setState({
      keywords
    })
  }

  renderAddress = () => {
    return <div>Address</div>
  }

  renderFilters = () => {
    const {filters} = this.props;
    const {filtersData} = this.state;
    return (
      <Fragment>
        {filtersData && filtersData.map(filter => {
          return <Filter
            {...filter}
            defaultValue={filters[filter.type] || []}
            selectLabels={this.selectFilters}
          />
        })}
      </Fragment>
    )
  }

  renderKeywords = () => {
    const {keywords} = this.props;
    const {keywordsData} = this.state;
    return (
      <Fragment>
        {keywordsData && keywordsData.map(keyword => {
          return <Filter
            {...keyword}
            defaultValue={keywords[keyword.type] || []}
            selectLabels={this.selectKeywords}
          />
        })}
      </Fragment>
    )
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
  keywords: state.home.keywords,
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
