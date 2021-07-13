import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from "react-redux";
import TabBar from "./components/TabBar/TabBar";
import Home from './pages/Home/Home'
import Message from './pages/Message/Message'
import Mine from './pages/Mine/Mine'
import DialogPanel from "./components/DialogPanel/DialogPanel";

class App extends Component{
  render() {
    const {dialogType} = this.props;
    console.log('dialogType', dialogType);
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' exact component={Home} />
          <Route path='/message' exact component={Message} />
          <Route path='/mine' exact component={Mine} />
          <TabBar />
          {dialogType && <DialogPanel />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapState = (state) => ({
  dialogType: state.home.dialogType,
});

export default connect(mapState)(App);
