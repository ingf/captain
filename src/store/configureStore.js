const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const syncOffline = require('./syncOffline')
// const reducer = require('../reducers')

import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

module.exports = function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  syncOffline(store)

  return store
}
