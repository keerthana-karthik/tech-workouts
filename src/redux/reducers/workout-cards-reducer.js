import fetch from 'isomorphic-fetch'
import { createReducer } from 'utils/redux'
import { API } from 'utils/api'

// Actions corresponding to this reducer
const WORKOUT_CARDS_LOADED = 'workout_cards_loaded'

// Initial state for this reducer. This is only a part of state tree
let initialState = []

// The actual reducer
export default createReducer(initialState, {
  [WORKOUT_CARDS_LOADED]: (state, { data }) => (data.workouts.filter((item) => (item.subscribed === true)))
})

// Action creators
export function workout_cards_loaded(data) {
  return {
    type: WORKOUT_CARDS_LOADED,
    payload: {
      data
    }
  }
}
// API call to load the work out cards
export function load_workout_cards() {
  return function(dispatch) {
    // Fix me: Dispatch a loading action to show spinner
    const header = {
      mode: 'cors'
    }
    fetch(API.ROOT_PATH + API.END_POINTS.GET_WORKOUTS, header)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        dispatch(workout_cards_loaded(json));
      }).catch(function(error) {
        // Fix me: Do a proper logging
        console.log('Error in API call ', error);
      })
  }
}