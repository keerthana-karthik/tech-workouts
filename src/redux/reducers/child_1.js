import { createReducer } from 'utils/redux'
// Actions corresponding to this reducer
const ACTION_2 = 'action_2';
// Initial state for this reducer. This is only a part of state tree
let initialState = {
  text: 'Hello! This is a header'
}
// The actual reducer
export default createReducer(initialState, {
  [ACTION_2]: (state, { data }) => ({
    text: data.text
  })
})
// Action creators
export function action_2(data) {
  return {
    type: ACTION_2,
    payload: {
      data
    }
  }
}
