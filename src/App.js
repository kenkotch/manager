import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

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
    return (
      <Provider store={ createStore(reducers) }>
        <View>
          <Text>App!</Text>
        </View>
      </Provider>
    )
  }
}

export default App
