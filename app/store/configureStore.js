import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import createLogger from 'redux-logger'

const logger = createLogger({
  level: 'info',
  collapsed: true,
})
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

module.exports = function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  return store
}
