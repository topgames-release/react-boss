import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from "react-redux";
import BottomNavigationTabBar from "./components/BottomNavigationTabBar/BottomNavigationTabBar";
import Home from './pages/Home/Home'
import Message from './pages/Message/Message'
import Mine from './pages/Mine/Mine'
import DialogPanel from "./components/DialogPanel/DialogPanel";
import ExpectJobPanel from "./components/ExpectJobPanel/ExpectJobPanel";
import AddExpectJobPanel from "./components/ExpectJobPanel/AddExpectJobPanel/AddExpectJobPanel";

class App extends Component{
  render() {
    const {showExpectJobPanel, showAddExpectJobPanel, dialogType} = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' exact component={Home} />
          <Route path='/message' exact component={Message} />
          <Route path='/mine' exact component={Mine} />
          <BottomNavigationTabBar />
          {dialogType && <DialogPanel />}
          {showExpectJobPanel && <ExpectJobPanel />}
          {showAddExpectJobPanel && <AddExpectJobPanel />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapState = (state) => ({
  showExpectJobPanel: state.home.showExpectJobPanel,
  showAddExpectJobPanel: state.home.showAddExpectJobPanel,
  dialogType: state.home.dialogType,
});

export default connect(mapState)(App);
