import React, { Component } from 'react'
import { PanResponder, StyleSheet, View, Text } from 'react-native'
import TodoTextInput from './TodoTextInput'
import Swipeout from 'react-native-swipeout'

export default class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false,
    }
  }

  handleSave(id, text) {
    let { actions } = this.props

    if (text.length === 0) {
      actions.deleteTodo(id)
    } else {
      actions.editTodo(id, text)
    }

    this.setState({
      editing: false,
    })
  }

  render() {
    let { todo, actions } = this.props
    let that = this
    let element

    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      )
    } else {
      let item = [styles.item]
      if (todo.completed) {
        item.push({
          textDecorationLine: 'line-through',
          color: '#bbb',
        })
      }
      element = (
        <View>
          <Text style={item}>
            {todo.text}
          </Text>
        </View>
      )
    }

    let swipeoutBtns = [
      {
        text: 'Edit',
        backgroundColor: '#0f0',
        onPress: () => {
          that.setState({
            editing: true,
          })
        },
      },
      {
        text: 'Delete',
        backgroundColor: '#aaa',
        onPress: data => {
          actions.deleteTodo(todo.id)
        },
      },
      {
        text: todo.completed ? 'UnDo' : 'Do',
        backgroundColor: '#f00',
        onPress: data => {
          actions.completeTodo(todo.id)
        },
      },
    ]

    return (
      <Swipeout
        ref="swipeout"
        autoClose={true}
        close={true}
        right={swipeoutBtns}
        backgroundColor="#fff"
      >
        {element}
      </Swipeout>
    )
    // return element
  }
}

let styles = StyleSheet.create({
  item: {
    height: 48,
    padding: 12,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '200',
  },
})
