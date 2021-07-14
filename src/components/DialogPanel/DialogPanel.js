import React, {Component} from "react";
import {connect} from "react-redux";
import Filter from "../Filter/Filter";
import {actionCreators, actionTypes} from "../../store/home";

import './DialogPanel.scss';

class DialogPanel extends Component {

  clear = () => {
    const {dialogType, clearDialogType, changeFilters, changeKeywords} = this.props;
    if (dialogType === 'filters') {
      changeFilters([]);
      clearDialogType();
    } else if (dialogType === 'keywords') {
      changeKeywords([]);
      clearDialogType();
    }
  }

  confirm = () => {
    console.log('confirm')
  }

  renderAddress = () => {
    return <div>Address</div>
  }

  renderFilters = () => {
    return (
      <Filter />
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
