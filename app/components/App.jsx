import React from 'react'

import {incrementCount} from '../actions'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.store.getState()
    }
    this.handleChange = this.handleChange.bind(this)
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    this.props.store.subscribe(this.handleChange)
  }

  handleChange() {
    this.setState({
      count: this.props.store.getState()
    })
  }

  increment() {
    this.props.store.dispatch(incrementCount())
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    )
  }
}
