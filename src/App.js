import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA9-4YdJBejfxzK6HHxM-gwAfT2eLL61aQ',
      authDomain: 'manager-c2fc9.firebaseapp.com',
      databaseURL: 'https://manager-c2fc9.firebaseio.com',
      projectId: 'manager-c2fc9',
      storageBucket: 'manager-c2fc9.appspot.com',
      messagingSenderId: '624521851977'
    }
    firebase.initializeApp(config)
  }

  render() {
    console.disableYellowBox = true
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={ store }>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
