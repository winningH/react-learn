function createStore(reducer) {
  let currentState;
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

  // 初始值
  dispatch({type: 'xxx/llll'})
  return {
    getState,
    dispatch,
    subscribe
  }
}


export default createStore