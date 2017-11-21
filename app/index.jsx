import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, hashHistory} from 'react-router'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Welcome to Home Page</p>
      </div>
    )
  }
}

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Welcome to About Page</p>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <div>
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>
), document.getElementById('root'));
