const React = require('react-native')
const { Provider } = require('react-redux/native')
const App = require('./ios/containers/App')
const configureStore = require('./app/store/configureStore')

const {
  Component,
  AppRegistry
} = React

const store = configureStore()

class reduxt extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reduxt', () => reduxt)
