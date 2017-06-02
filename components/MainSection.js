import React, { Component } from 'react'
import { StyleSheet, View, ListView, Text } from 'react-native'
import TodoItem from './TodoItem'

export default class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let { actions, todos } = this.props
    todos = todos.sort((item1, item2) => {
      return item1.completed
    })

    return (
      <View>
        {this.props.todos.map((item, i) => {
          return <TodoItem key={i} todo={item} actions={actions} />
        })}
      </View>
    )
  }
}
