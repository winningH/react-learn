function createStore(reducer, initValue) {
  let currentState = initValue ? initValue : null
  let currentListeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }

  function subscribe(listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}


export default createStore