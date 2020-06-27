import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    // this.setCounter(1)
    document.getElementById("btn").addEventListener("click", this.setCounter)
  }

  changeValue = v => {
    // setState() 接收两个参数
    // 第一个参数为对象或函数
    // 第二个为callback，state更新之后被调用


    // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更新
    // 第一种用法
    /* this.setState({
      counter: this.state.counter + v
    })
    // 这个时候获取到的counter是异步的
    console.log("counter", this.state.counter) */

    // 如果想让counter跟button的值同步输出
    // 第二种用法
    /* this.setState({
      counter: this.state.counter + v
    }, () => {
      console.log("counter", this.state.counter)
    }) */

    // 第三种用法
    this.setState((state) => {
      return {
        counter: state.counter + v
      }
    }, () => {
      console.log(this.state.counter);
    })
  }

  setCounter = () => {
    // this.changeValue(1)

    // setState 在setTimeout和原生事件中是同步的
    // setTimeout(() => {
    //   this.changeValue(1)
    //   this.changeValue(2)
    // }, 0);

    this.changeValue(1)
    this.changeValue(2)
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{counter}</button>
        <button id="btn" style={{marginLeft: '20px'}}>原生事件：{counter}</button>
      </div>
    )
  }
}