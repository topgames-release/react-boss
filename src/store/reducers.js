import { combineReducers } from 'redux'
import {tabBarReducer} from './tab-bar'
import {homeReducer} from "./home";

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  home: homeReducer,
})

export default rootReducer
