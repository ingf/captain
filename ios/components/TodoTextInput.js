import React, {
    Component,
    View,
    Text,
    Image,
    TextInput
}
from 'react-native'
    // import classnames from 'classnames'

export default class TodoTextInput extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            text: this.props.text || ''
        }
    }

    handleSubmit(e) {
        this.props.addTodo(this.state.text)
        if (this.props.newTodo) {
            this.setState({
                text: ''
            })
        }
    }

    handleChange(text) {
        this.setState({
            text: text
        })
    }

    handleBlur(e) {
        if (!this.props.newTodo) {
            this.props.addTodo(this.state.text)
        }
    }

    render() {
        return (
            <TextInput
                style={{height: 40, paddingLeft: 20, borderWidth:1, borderColor: '#aaa'}}
                placeholder={this.props.placeholder}
                value={this.state.text}
                onBlur={this.handleBlur.bind(this)}
                onChangeText={this.handleChange.bind(this)}
                onEndEditing={this.handleSubmit.bind(this)} 
            />
        )
    }
}
