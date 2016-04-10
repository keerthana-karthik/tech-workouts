import fetch from 'isomorphic-fetch'
import { createReducer } from 'utils/redux'
import { API } from 'utils/api'

// Actions corresponding to this reducer
const WORKOUT_CONTENT_LOADED = 'workout_content_loaded'

// Initial state for this reducer. This is only a part of state tree
let initialState = {};

// The actual reducer
export default createReducer(initialState, {
  [WORKOUT_CONTENT_LOADED]: (state, { data }) => {
    return data;
  }
})

// Action creators
export function workout_content_loaded(data) {
  return {
    type: WORKOUT_CONTENT_LOADED,
    payload: {
      data
    }
  }
}
// API call to load the work out cards
export function load_workout_content(data) {
  return function(dispatch) {
    // Fix me: Dispatch a loading action to show spinner
    var headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    const reqHeader = {
      mode: 'cors',
      headers: headers
    }
    fetch(API.ROOT_PATH + data.fileUrl, reqHeader)
      .then(function(response) {
        return response.text();
      }).then(function(mdText) {
        data.content = mdText
        dispatch(workout_content_loaded(data));
      }).catch(function(error) {
        // Fix me: Do a proper logging
        console.log('Error in API call ', error);
      })
  }
}

