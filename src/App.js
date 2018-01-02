import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import config from './config/config'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config)
  }

  render() {
    console.disableYellowBox = true
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    )
  }
}

export default App
