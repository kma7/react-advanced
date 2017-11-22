import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducers'
import App from './components/App.jsx'

let store = createStore(reducer)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
