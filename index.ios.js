/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './app/store/configureStore'

const store = configureStore()

class captain extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
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
