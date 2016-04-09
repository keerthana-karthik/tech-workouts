import { combineReducers } from 'redux';

import child_1 from './child_1';
import api_call from './api_call';
import workouts from './workout-cards-reducer'

export default combineReducers({
  child_1,
  api_call,
  workouts
})