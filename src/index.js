import React from 'react'
import ReactDOM from 'react-dom'
//import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
//import store from './store'
import App from './App'
import history from './history'

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('app')
)
