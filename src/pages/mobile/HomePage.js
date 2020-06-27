import React, { Component } from 'react'
import Layout from '../../components/Layout'

export default class HomePage extends Component {
  // getMsgFromChild =  (_curComp, msg) => {
  //   console.log(msg);
  // }

  getMsgFromChild = (msg) => {
    console.log(msg);
  }

  render() {
    return (
      <div>
        {/* <Layout parent={this}> */}
        <Layout parent={this.getMsgFromChild.bind(this)}>
          <div>
            {{
              title: (
                <div>HomePage header</div>
              ),
              content: <p>HomePage content'</p>,
              // btnClick: () => {
              //   console.log('click');
              // }
            }}
          </div>
        </Layout>
      </div>
    )
  }
}