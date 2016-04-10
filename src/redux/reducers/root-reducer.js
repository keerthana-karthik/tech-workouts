import { combineReducers } from 'redux';

import workouts from './workout-cards-reducer'
import currentLesson from './workout-content-reducer'

export default combineReducers({
  workouts,
  currentLesson
})