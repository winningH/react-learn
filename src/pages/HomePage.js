import React, { Component } from 'react'
import UserPage from './UserPage'
import {ThemeContext} from '../Context'

export default class HomePage extends Component {
  static contextType = ThemeContext
  render() {
    return (
      <div>
        <h2 className={this.context.themecolor}>HomePage</h2>
        <UserPage />
      </div>
    )
  }
}