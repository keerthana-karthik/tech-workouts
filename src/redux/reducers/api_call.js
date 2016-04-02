import fetch from 'isomorphic-fetch';

import { createReducer } from 'utils/redux';

const DATA_LOAD_COMPLETED = 'data_load_completed';

let initialState = {

};

export default createReducer(initialState, {
  [DATA_LOAD_COMPLETED]: (state, { data }) => {
    return data;
  }
})

export function load_data() {
  return function(dispatch) {
    const header = {
      mode: 'cors'
    }
    fetch('data/data.json', header)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        dispatch(data_load_completed(json));
      }).catch(function(error) {
        console.log('Error in API call ', error);
      })
  }
}

export function data_load_completed(data) {
  return {
    type: DATA_LOAD_COMPLETED,
    payload: {
      data
    }
  }
}