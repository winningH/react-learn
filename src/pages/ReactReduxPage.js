import React, { Component } from 'react'
import { connect } from 'react-redux'

/*  
//装饰器写法
@connect(
  // mapStateToProps 把state映射到props
  （{number}） => ({number}),
  // mapDispatchToProps object | function 把dispatch映射到props
  dispath => {
    let creators = {
      add: () => ({type: 'ADD'})
    }
    return dispatch
  }
)  
*/
class ReactReduxPage extends Component {
  render() {
    const { number, add } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{number}</p>
        {/* <button onClick={() => dispatch({type: 'ADD'})}>add</button> */}
        <button onClick={add}>add2</button>
      </div>
    )
  }
}

export default connect(
  // mapStateToProps 把state映射到props
  state => ({number: state.num}),

  // mapDispatchToProps object | function 把dispatch映射到props
  {
    add: () => ({type: 'ADD'})
  }
)(ReactReduxPage)
