const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

module.exports = function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  return store
}
