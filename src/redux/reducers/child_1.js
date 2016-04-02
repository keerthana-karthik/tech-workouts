import { createReducer } from 'utils/redux'
// Actions corresponding to this reducer
const ACTION_1 = 'action_1';
// Initial state for this reducer. This is only a part of state tree
let initialState = {
  text: 'Hello! This is a header'
}
// The actual reducer
export default createReducer(initialState, {
  [ACTION_1]: (state, { data }) => ({
    text: data.text
  })
})
// Action creators
export function action_1(data) {
  return {
    type: ACTION_1,
    payload: {
      data
    }
  }
}
