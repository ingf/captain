import {
  createStore,
  applyMiddleware
}
from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as actions from 'app/actions'
import reducer from 'app/reducers'

const logger = createLogger({
  level: 'info',
  logger: console,
  collapsed: true
})
const createStoreWithMiddleware = applyMiddleware(
  thunk, logger
)(createStore)
let initialState = {}
const store = createStoreWithMiddleware(reducer, initialState)

// 发起一系列 action
store.dispatch(actions.addTodo('Learn about actions'))
store.dispatch(actions.addTodo('Learn about reducers'))
store.dispatch(actions.addTodo('Learn about store'))
store.dispatch(actions.completeTodo(0))
store.dispatch(actions.completeTodo(1))
store.dispatch(actions.clearCompleted())