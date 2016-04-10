import { combineReducers } from 'redux';

import child_1 from './child_1'
import api_call from './api_call'
import workouts from './workout-cards-reducer'
import currentLesson from './workout-content-reducer'

export default combineReducers({
  child_1,
  api_call,
  workouts,
  currentLesson
})