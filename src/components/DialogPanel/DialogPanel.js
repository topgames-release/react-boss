import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators, actionTypes} from "../../store/home";

import './DialogPanel.scss';

class DialogPanel extends Component{
  render() {
    const {dialogType, clearDialogType} = this.props;
    return (<div className='dialog-panel' onClick={clearDialogType}>DialogPanel: {dialogType}</div>)
  }
}

const mapState = (state) => ({
  dialogType: state.home.dialogType,
});

const mapDispatch = (dispatch) => ({
  clearDialogType() {
    dispatch(actionCreators[actionTypes.CHANGE_TOP_TIP_DIALOG](''));
  },
});

export default connect(mapState, mapDispatch)(DialogPanel);
