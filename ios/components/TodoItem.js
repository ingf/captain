import React, {
    Component, View, Text
}
from 'react-native'

export default class TodoItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false
        }
    }
    render() {
        let {
            todo
        } = this.props

        let element
        if (this.state.editing) {

        } else {
            element = (
                <Text>{todo.text}</Text>
            )
        }

        return (
            <View>
                {element}
            </View>
        )
    }
}
