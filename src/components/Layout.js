import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

export default class Layout extends Component {
  // sendMsgToParent = () => {
  //   this.props.parent.getMsgFromChild(this, {
  //     title: 'to parent',
  //     cotent: 'child msg'
  //   })
  // }
  sendMsgToParent = () => {
    this.props.parent({
      title: 'to parent',
      cotent: 'child msg'
    })
  }
  render() {
    const {children} = this.props
    return (
      <div className="layout">
        <TopBar />
        <div style={{height: '84vh'}}>
          {children.props.children.title}
          {children.props.children.content}
          {/* <button onClick={children.btnClick}>button</button> */}
          <button onClick={this.sendMsgToParent}>to parent</button>
        </div>
        <BottomBar />
      </div>
    )
  }
}