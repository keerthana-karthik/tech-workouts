export function createReducer(initialState, reducerMap) {
  return (state = initialState, action = {}) => {
    const reducer = reducerMap[action.type];
    const getNewState = (state, action) => {
      // If the reducer is operating on an object/array within the state tree, create and return a new object/array.
      // Else return the value directly
      if(Array.isArray(state)) {
        return [...reducer(state, action.payload)];
      }
      return (typeof state === 'object') ? ({...state, ...reducer(state, action.payload)}): (reducer(state, action.payload))
    }
    return reducer? getNewState(state, action): state;
  };
}
