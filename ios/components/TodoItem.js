import React, {
    Component, View, Text,
}
from 'react-native'
import TodoTextInput from './TodoTextInput'
var Swipeout = require('react-native-swipeout')


export default class TodoItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false
        }
    }

    handleSave(id, text) {
        let {
            actions
        } = this.props

        if (text.length === 0) {
            actions.deleteTodo(id)
        } else {
            actions.editTodo(id, text)
        }
        this.setState({
            editing: false
        })
    }

    render() {
        let {
            todo, actions
        } = this.props

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
            element = (
                <Text>
                    {todo.text}
                </Text>
            )
        }

        let swipeoutBtns = [{
            text: 'Edit',
            backgroundColor: '#aaa',
            onPress: () => {
                that.setState({
                    editing: true
                })
            }
        }, {
            text: 'Delete',
            backgroundColor: '#0f0',
            onPress: (data) => {
                actions.deleteTodo(todo.id)
            }
        }, {
            text: todo.completed ? 'UnDo' : 'Do',
            backgroundColor: '#f00',
            onPress: (data) => {
                actions.completeTodo(todo.id)
            }
        }]

        return (
            <Swipeout
                autoClose={true}
                close={true}
                right={swipeoutBtns}
            >
                {element}
            </Swipeout>
        )
    }
}
