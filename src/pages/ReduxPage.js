import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component{
  componentDidMount() {
    // state改变，更新视图
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState().num}</p>
        <button onClick={() => store.dispatch({type: 'ADD'})}>add</button>
        <button onClick={() => store.dispatch({ type: 'SUB' })}>sub</button>
        <button onClick={() => store.dispatch({ type: 'reset', payload: 0 })}>reset</button>
      </div>
    )
  }
}