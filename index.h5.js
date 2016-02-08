import 'babel-core/polyfill'
import React from 'react'
import {
    render
}
from 'react-dom'
import {
    Provider
}
from 'react-redux'
import App from './h5/containers/App'
import configureStore from 'app/store/configureStore'
import './h5/style/index.css'

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
