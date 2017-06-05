import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as actions from '../app/actions'
import reducer from '../app/reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
})
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const initialState = {}
const store = createStoreWithMiddleware(reducer, initialState)

// 发起一系列 action
store.dispatch(actions.addTodo('Learn about actions'))
console.log('\n\n')
store.dispatch(actions.addTodo('Learn about reducers'))
console.log('\n\n')
store.dispatch(actions.addTodo('Learn about store'))
console.log('\n\n')
store.dispatch(actions.completeTodo(0))
console.log('\n\n')
store.dispatch(actions.completeTodo(1))
console.log('\n\n')
store.dispatch(actions.clearCompleted())
