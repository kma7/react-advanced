import React from 'react'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <header>
          <p>Our App</p>
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
          </nav>
        </header>
      </div>
    )
  }
}
