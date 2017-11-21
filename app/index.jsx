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
    <Route exact path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
  </Router>
), document.getElementById('root'));
