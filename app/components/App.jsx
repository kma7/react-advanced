import React from 'react'

import CountWidget from '../containers/CountWidgetContainer.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CountWidget store={this.props.store}/>
      </div>
    )
  }
}
