import React, { PureComponent } from 'react'

export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  changeValue = () => {
    this.setState({
      count: 100
    })
  }

  // PureComponent 没有shouldComponentUpdate
  // shouldComponentUpdate(_nextProps, nextState) {
  //   return nextState.count !== this.state.count
  // }

  render() {
    console.log('render');
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.changeValue}>value: {this.state.count}</button>
      </div>
    )
  }
}