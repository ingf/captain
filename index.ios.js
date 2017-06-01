/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

const React = require('react-native')
const { Provider } = require('react-redux')
const App = require('./containers/App')
const configureStore = require('./app/store/configureStore')

const { Component, AppRegistry } = React

const store = configureStore()

class captain extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

AppRegistry.registerComponent('captain', () => captain)

// import React, { Component } from 'react'
// import { AppRegistry, Text } from 'react-native'

// class captain extends Component {
//   render() {
//     return <Text>Hello world!</Text>
//   }
// }

// AppRegistry.registerComponent('captain', () => captain)
