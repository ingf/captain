import React, { Component } from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
// import classnames from 'classnames'

export default class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || '',
    }
  }

  handleSubmit(e) {
    this.props.onSave(this.state.text)
  }

  handleChange(text) {
    console.log('change')
    this.setState({
      text: text,
    })
  }

  handleBlur(e) {
    console.log('blur')
    if (!this.props.newTodo) {
      this.props.onSave(this.state.text)
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.handleBlur.bind(this)}
          onChangeText={this.handleChange.bind(this)}
          onEndEditing={this.handleSubmit.bind(this)}
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    height: 47,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 18,
    fontWeight: '200',
  },
})
