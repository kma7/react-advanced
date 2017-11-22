import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter as Router, browserHistory} from 'react-router-dom'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <div>
      <Route path='/' component={App} />
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>
), document.getElementById('root'));
