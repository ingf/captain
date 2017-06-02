import React, { Component } from 'react'
import { PanResponder, View, Text, Image, TextInput } from 'react-native'

import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  onChangeText(text) {
    this.props.addTodo(text)
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this._highlight.bind(this),
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    })
  }

  _highlight(e, gestureState) {
    console.log(e)
    console.log(gestureState)
  }

  _handlePanResponderMove(e, gestureState) {
    // console.log(e)
    console.log(gestureState.vx, gestureState.vy)
  }

  _handlePanResponderEnd(e, gestureState) {
    console.log('end')
    console.log(gestureState)
  }

  render() {
    return (
      <View>
        <TodoTextInput
          newTodo
          placeholder="What needs to be done?"
          onSave={this.onChangeText.bind(this)}
        />
      </View>
    )
  }
}
