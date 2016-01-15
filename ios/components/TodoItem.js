import React, {
    Component, View, Text
}
from 'react-native'
import TodoTextInput from './TodoTextInput'


export default class TodoItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false
        }
    }

    handlePress() {
        this.setState({
            editing: true
        })
    }

    hadnleSave(id, text) {
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
            todo
        } = this.props

        let element
        if (this.state.editing) {
            element = (
                <TodoTextInput
                    text={todo.text}
                    editing={this.state.editing}
                    onSave={text => this.hadnleSave(todo.id, text)}
                />
            )
        } else {
            element = (
                <Text onPress={this.handlePress.bind(this)}>{todo.text}</Text>
            )
        }

        return (
            <View>
                {element}
            </View>
        )
    }
}
