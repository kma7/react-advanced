import React from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants.js'
import {actions} from './actions/app-actions.js'
import {CountStore} from './stores/count-store.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: CountStore.getCount()}
    this.increment = this.increment.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    CountStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    CountStore.removeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      count: CountStore.getCount()
    })
  }

  increment() {
    actions.incrementCount()
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

ReactDOM.render(<App />, document.getElementById('root'));
