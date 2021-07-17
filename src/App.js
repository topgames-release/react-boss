import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from "react-redux";
import BottomNavigationTabBar from "./components/BottomNavigationTabBar/BottomNavigationTabBar";
import Home from './pages/Home/Home'
import Message from './pages/Message/Message'
import Mine from './pages/Mine/Mine'
import DialogPanel from "./components/DialogPanel/DialogPanel";
import ExpectJobPanel from "./components/ExpectJobPanel/ExpectJobPanel";

class App extends Component{
  render() {
    const {showExpectJobPanel, dialogType} = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' exact component={Home} />
          <Route path='/message' exact component={Message} />
          <Route path='/mine' exact component={Mine} />
          <BottomNavigationTabBar />
          {dialogType && <DialogPanel />}
          {showExpectJobPanel && <ExpectJobPanel />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapState = (state) => ({
  showExpectJobPanel: state.home.showExpectJobPanel,
  dialogType: state.home.dialogType,
});

export default connect(mapState)(App);
