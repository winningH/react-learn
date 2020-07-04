import React, { Component } from 'react'
import HomePage from './HomePage'
import {ThemeProvider} from '../Context'

export default class ContextPage extends Component {
  render() {
    const theme = {
      themecolor: 'red'
    }
    return (
      <div>
        <h1>ContextPage</h1>
        <ThemeProvider value={theme}>
          <HomePage />
        </ThemeProvider>
        
      </div>
    )
  }
}