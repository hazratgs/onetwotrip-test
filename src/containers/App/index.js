import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div>Hello world</div>
    )
  }
}
