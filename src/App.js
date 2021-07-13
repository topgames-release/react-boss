import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import TabBar from "./components/TabBar/TabBar";
import Home from './pages/Home/Home'
import Had from './pages/Had/Had'
import Message from './pages/Message/Message'
import Mine from './pages/Mine/Mine'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' exact component={Home} />
        <Route path='/had' exact component={Had} />
        <Route path='/message' exact component={Message} />
        <Route path='/mine' exact component={Mine} />
        <TabBar />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
