import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LifeCycelPage extends Component {
  static defaultProps = {
    msg: 'omg'
  }

  // 类似vue的props 的类型控制
  static propTypes = {
    msg: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log("constructor")
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState
    console.log('shouldComponentUpdate', nextState, this.state);
    return count !== 3
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  setCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log("render", this.props)
    const { count } = this.state
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count %2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    )
  }
}

class Child extends Component {
  // 初次渲染的时候不会执行，只有在已挂载的组件接收新的props时，才会执行
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('Child render');
    const { count } = this.props
    return (
      <div>
        <h4>LifeCyclePage Child</h4>
        <p>{count}</p>
      </div>
    )
  }
}