// import { createStore } from "redux";

// 使用自定义redux
import { createStore } from '../pages/myRedux'

// 定义state初始化和修改规则
function counterReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { num: state.num + 1 }
    case "SUB":
      return { num: state.num - 1 }
    case 'reset': 
      return { num: action.payload }
    default:
      return { num: 0 }
  }
}
const store = createStore(counterReducer, {
  num: 0
})

export default store